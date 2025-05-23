---
title: "¿Cómo implementar Live Activities?"
description: "Este post nos permite aprender más sobre Live Activity"
pubDate: "2022-11-20"
heroImage: "/blog-placeholder-3.jpg"
thumbnail: "/thumbnails/apple_thumb.png"
---

Live activies nos permite mostrar al usuario cuando tenemos una actividad ejecutandose en tiempo real,
estas actividades pueden mostrase tanto en el Dynamic Island como en el Lock Screen.

Para esta implementación vamos a necesitar: 

- WidgetKit
- AcivityKit
- SwiftUI

### Primero creamos un widget para el proyecto

Vamos a crear un nuevo target en el cuál irá nuestro LiveActivity y cualquier otro widget que vayamos a implementar.

![Creación de widget](/images/liveActivities/img1.png)

### Habilitamos live activies en nuestro info.plist

Agregamos `NSSupportsLiveActivities` con valor YES en el info.plist del target de la aplicación.

![Habilitamos live activities en nuestro info.plist](/images/liveActivities/img2.png)

### Definimos el ActivityAttributes

El ActivityAttributes es un protocolo el cuál refleja la data que usaremos en el widget que se muestra en el lock screen,
implementamos este protocolo con la data que trabajaremos

```swift
import ActivityKit

struct LiveOrderWidgetAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Esta es data dinámica, la cuál se ira actualizando vía api o vía push notifcation
        var step: String
    }

    // Esta es data estática
    var restaurant: String
}
```

### Implementamos nuestra UI tanto para el Lock Screen o el Dynamic Island

```swift
import WidgetKit
import SwiftUI

struct LiveOrderWidgetLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: LiveOrderWidgetAttributes.self) { context in

            // Esta vista será la que se mostrará en el LockScreen
            OrderView(orderStep: OrderStep(rawValue: context.state.step) ?? .started)
                .activityBackgroundTint(Color.cyan)
                .activitySystemActionForegroundColor(Color.black)
            
        } dynamicIsland: { context in

            // Esta vista será la que se mostrará en el Dynamic Island
            DynamicIsland {
                DynamicIslandExpandedRegion(.center) {
                    OrderView(orderStep: OrderStep(rawValue: context.state.step) ?? .started)
                }
            } compactLeading: {
                Image(systemName: "bicycle")
            } compactTrailing: {
                Text("InProgress")
            } minimal: {
                Image(systemName: "bicycle")
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}
```

Ahora mostramos el detalle de lo que representaría cada función del struct DynamicIsland 

![Detalle de DynamicIsland](/images/liveActivities/img3.png)

### Actualizando nuesto LiveActivies

Podemos actualizar nuestro LiveActivity usando el api con los siguientes metodos

### Para inicial el LiveActivity usamos `request`

```swift
var orderActivity: Activity<LiveOrderWidgetAttributes>?

do {
    let attributes = LiveOrderWidgetAttributes(restaurant: "Weriklandia")
    let initialState = LiveOrderWidgetAttributes.ContentState(step: "start")
    orderActivity = try Activity.request(attributes: attributes,
                                        contentState: initialState)
} catch {}
```

### Para actualizar el LiveActivity usamos `update`

```swift
let newState = LiveOrderWidgetAttributes.ContentState(step: "inProgress")
Task {
    // Este alert configuration hace que nos muestre una push en el apple watch
    let alertConfiguration = AlertConfiguration(title: "Delivery Update",
                                                body: "Tu pizza esta llegando",
                                                sound: .default)
    await orderActivity?.update(using: newState, alertConfiguration: alertConfiguration)
}
```

### Para terminar el LiveActivity usamos `end`

```swift
let endState = LiveOrderWidgetAttributes.ContentState(step: "end")
Task {
    await orderActivity?.end(using: endState, dismissalPolicy: .default)
}
```

### Actualizar nuestro LiveActivity usando push notification

En ese caso tendríamos que realizar el request de una manera un poco diferente, en ese caso tendríamos que pedir un token, el cual enviaremos a nuestro backend para que ese lo use y envíe la push

👀 : Recuerda que tienes que solicitar los permisos para que lleguen las push notification usando UserNotificationCenter, pero el registro de los tokens lo hace AcivityKit

```swift
var orderActivity: Activity<LiveOrderWidgetAttributes>?

let attributes = LiveOrderWidgetAttributes(restaurant: "Weriklandia")
let initialState = LiveOrderWidgetAttributes.ContentState(step: "start")

do {
    // Agregamos el pushType
    orderActivity = try Activity.request(attributes: attributes,
                                            contentState: initialState,
                                            pushType: .token)
    if let orderActivity = orderActivity {
        print("orderActivity \(orderActivity.id)")
        Task {
            let tokenUpdates = orderActivity.pushTokenUpdates.makeAsyncIterator()
            await tokenUpdates.next().map { data in
                // Este es el token que usaremos para enviar las push de actualización 
                print("tokenUpdates data \(DeviceToken(data: data).hexString)")
            }
        }
    }
    
} catch(let error) {
    print("Error in request: \(error.localizedDescription)")
}
```

El formato de la push también cambia un poco y le tendríamos que agregar los atributos `content-state` el cual tiene que ser
similar al struct que definimos en el `ActivityAttributes`.

Entonces el payload tendría que se como este

```javascript
{"aps": {
        "timestamp":1668562569,
        "event": "update",
        "content-state": {
            "step": "inProgress"
        },
        "alert": {
            "title": "Race Update",
            "body": "Tony Stark is now leading the race!"
        }
    }
}
```

Y si recordamos nuestro ContentState en nuestro `ActivityAttributes` fue

```Swift
 public struct ContentState: Codable, Hashable {
    var step: String
}
```

Ahi vemos que hace match con lo que estamos enviando en nuestro payload

👀 : Otro detalle a considerar es que cuando probemos el envío de las push tenemos que actualizar el `timestamp` con la hora que se esta enviando la push,
de lo contrario no se actualizara nuestro LiveActivity.

Aquí dejo un <a href="https://gist.github.com/erikfloresq/e84ff8bd688db1590bbe8d67704c6735" target="_blank">script</a> para probar el envío de las push notification.

Y con eso estaríamos cubriendo una implementación básica de LiveActivity.

Si gusta puedes revisar el <a href="https://github.com/erikfloresq/LiveOrder" target="_blank">repo</a> donde se tiene el ejemplo completo.

Gracias por leer 😄

<a href="https://twitter.com/erikfloresq" target="_blank">@erikfloresq</a>