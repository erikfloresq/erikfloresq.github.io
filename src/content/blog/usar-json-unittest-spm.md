---
title: "¿Cómo agregar json para UnitTest en SPM?"
description: "Este post veremos como se implementa un json para UnitTest para SPM"
pubDate: "2021-06-20"
heroImage: "/blog-placeholder-3.jpg"
thumbnail: "/thumbnails/swiftLogo_thumb.png"
---

Hace poco estuve desarrollando un wrapper para un api de RickAndMorty y al momento de de hacer las pruebas encontre un punto interesante y era de 
¿Cómo agrego mis json para hacer mis stubs?, bueno relativamente es muy fácil y consiste en hacer lo siguiente:

```swift
targets: [
    .target(
        name: "RickAndMortyAPI",
        dependencies: []),
    .testTarget(
        name: "RickAndMortyAPITests",
        dependencies: ["RickAndMortyAPI"],
        resources: [
            // aquí espeficicamos donde irian nuestros jsons
            .process("Resources")
        ]),
]
```

Como vemos, en nuestra sección de targets, en mi caso, la de test, se agrega el atributo `resources`, en donde vamos a pasar la ruta donde se encontrarán nuestros jsona mediante la función statica `process`, en esta función vemos que especificamos el nombre del directorio `Resources`, el cuál nosotros tenemos que crear y nos quedaria asi

![Agregamos JSON en Test target](/images/jsonUnitTest/xcode-json-spm.png)

Lo que me gustaria aclarar es que debemos respetar el nombre que agregamos en el `pacakge.swift` como en la estructura de carpetas, si son diferentes no va a funcionar, esto en un inicio me causo un poco de confunsión, ya que cuando desarrollas iOS, si cambias el nombre del archivo en la estructura de carpetas, este no va de la mano con el nombre de las clase que es declarado dentro del archivo y tiene algo de sentido ya que podemos agregar n cosas en un archivo swift y por otro lado al package.swift al ser un tipo de manifiesto, tiene sentido de tratar de reflejar la estructura de carpetas que tiene nuestro paquete.

Al tener todo correctamente nombrado, hacemos un build y se nos generara la variable estatica `module` agregada a clase `Bundle`, con lo cuál, ahora puede llamar al json de la siguiente manera

```swift
    let jsonFileURL = Bundle.module.url(forResource: file, withExtension: "json")
```

## Conclusión

Al momento de desarrollar un paquete debemos respetar el nombre que declaramos en nuestra `package.swift` en nuestra estructura de carpetas y que para llamar a nuestro json debemos usar la variable estatica `module` que es autogenerada (otra opcion quizás es ya tener esta variable `module` como un extensión, como parte de nuestros snippets, pero si no se autogenera quizas es porqué algo no se esta haciendo bien en tu `package.swift`).

* Puedes revisar el paquete completo en <a href="https://github.com/erikfloresq/RickAndMortyAPI" target="_blank">Github</a>

[@erikfloresq](https://twitter.com/erikfloresq)