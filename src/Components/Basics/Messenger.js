import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Messenger = () => {
  return (
    <>
      <section className="toploadsquad">
        <div className="topbarContanier">
          <div className="topbarcontent">
            <div className="topbar-container">
              <Link to="/">
                <img src="../Images/logo.png" className="logo" alt=""></img>
              </Link>
            </div>
            <div className="topbar-container1">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search Linkbook"
                className="search"
              ></input>
            </div>
            <div class="container">
              {/* <img className="fa-sharp fa-solid fa-house hover-element" src="../Images/house.png"  alt=""></img> */}
              <i class="fa-sharp fa-solid fa-house hover-element"></i>
              <span class="home">Home</span>
            </div>
            <div class="container2">
              <i class="fa-solid fa-user-group"></i>
              <span class="home">Friends</span>
            </div>
            <div class="container3">
              <i class="fa-solid fa-store"></i>
              <span class="home">Marketplace</span>
            </div>
            <div class="container4">
              <i class="fa-solid fa-people-group"></i>
              <span class="home">Groups</span>
            </div>
            <div class="container5">
              <i class="fa-solid fa-gamepad"></i>
              <span class="home">Gaming</span>
            </div>

            <div class="container12">
              <i class="fa-solid fa-bars"></i>
              <span className="home">Menu</span>
              {/* <Popup trigger={buttonPopup} setTrigger={() => setButtonPopup}>
                <h5 className="chatboxlist">messenger list</h5>
              </Popup> */}
            </div>

            {/* <div class="container7" onClick={() => setButtonPopup(true)}> */}

            {/* <div class="container7">
                <i class="fa-brands fa-facebook-messenger">{""}</i>
                <span className="home">Messenger</span>
              </div> */}

            <div class="container8">
              <i class="fa-solid fa-bell"></i>
              <span className="home">Notifications</span>
            </div>
            <Link to="/userprofile">
            <div class="container9">
              <img src="../Images/User.jpeg" className="user" alt=""></img>
              <span className="home">Account</span>
            </div>
            </Link>
          </div>
        </div>

        {/* chatsection starts */}

        <div className="chatsection-container-content">
          <div className="chatsection-container">
            <div className="chatcontainer">
              <div className="chatsection">
                <h1>Chats</h1>
              </div>
              <div className="chatsection1">
                <img src="../Images/loader.png" className="lder" alt=""></img>
              </div>
              <div className="chatsection2">
                <img
                  src="../Images/camcroder.png"
                  className="camc"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="chatSearchbar">
              <i className="fas fa-search chatsearch"></i>
              <input
                type="text"
                placeholder="Search Messenger"
                className="chatinput"
              ></input>
            </div>
            {/* messenger for people */}

            <div className="userprofile-container-content">
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* starts */}
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Jhyaple boii
                    </label>
                    <br />
                    <label className="chatwithpeople">
                    Jhyaple boii: Hanuman
                    </label>
                    <label className="chattiming"> .now</label>
                  </div>
                </div>
              </div>

              {/* ends */}

              {/* starts */}
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Sachin Dahal
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      Sachin  Dahal: Sirji
                    </label>
                    <label className="chattiming"> .5min</label>
                  </div>
                </div>
              </div>

              {/* ends */}

              {/* starts */}
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}

              {/* starts */}
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}

              {/* starts */}
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}


              {/* starts */}
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}


              {/* starts */}
              <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}

               {/* starts */}
               <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}

               {/* starts */}
               <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}

                {/* starts */}
               <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}

                {/* starts */}
               <div className="userprofile-container">
                <div className="userimage">
                  <img
                    src="../Images/anita.jpeg"
                    className="anita"
                    alt=""
                  ></img>
                </div>
                <div className="username-container">
                  <div className="username-content">
                    <label className="userprofilenameandcaste">
                      Anita Poudel
                    </label>
                    <br />
                    <label className="chatwithpeople">
                      The video chat ended.
                    </label>
                    <label className="chattiming"> .3h</label>
                  </div>
                </div>
              </div>

              {/* ends */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Messenger;
