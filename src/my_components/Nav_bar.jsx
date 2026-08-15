import { useState, useRef, useEffect } from "react";

function Nav_bar() {
  const [open, setOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const menuRef = useRef();

  //  Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
        setActivePopup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar pt-4">
      <div className="search-box">
        <i className="bi bi-search search-icon"></i>
        <input type="text" placeholder=" Search here..." className="search-input" />
      </div>

      <div className="menu-container mx-2" ref={menuRef}>
        <div
          className="dots"
          onClick={() => {
            if (activePopup) {
              setActivePopup(null);
              setOpen(true);
            } else {
              setOpen((prev) => !prev);
            }
          }}>
          <i className="bi bi-three-dots-vertical"></i>
        </div>

        <div className={`dropdown ${open ? "active" : ""}`}>
          <p className="item" onClick={() => {
            setActivePopup("account");
            setOpen(false);
          }}>Account</p>
          <p className="item">Logout</p>
        </div>

      </div>

      {/* a/c */}
      <div className={`popup ${activePopup === "account" ? "show" : ""}`}>
        <h2>Account</h2>
        <br />
        <div className="d-flex">
          <div>
            <img src="https://i.pravatar.cc/150?img=8" alt="dp" className="chat-dp" />
          </div>
          <div className=" mx-3">
            <h4>Himanshu Pandey</h4>
            <span>9877777777</span> <br />
            <span>himasnhupandey6242@gmail.com</span><br />
            <div className="btn btn-dark mt-4">Log out</div>
          </div>
        </div>
      </div>
      
    </div >
  );
}

export default Nav_bar;