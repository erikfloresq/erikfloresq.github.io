import React, { Component } from 'react'
import lavaldi from '../../content/images/erikfloresq.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={lavaldi} alt="Erik Flores" />
            </div>
            <div>
              <p>
                {`Desarrollador de software con gusto por el frontend 🔥👨🏻‍💻🔥`}
              </p>
              <div>
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/erikfloresq"
                  data-size="large"
                  data-show-screen-name="false"
                >
                  @erikfloresq
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
