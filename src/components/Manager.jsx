import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = ({ darkMode }) => {
  const ref = useRef();
  const passwordRef = useRef();

  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });

  const [passwordArray, setpasswordArray] = useState([]);

  const getPasswords = async () => {
    const res = await fetch("http://localhost:3000/passwords");
    const data = await res.json();
    setpasswordArray(data);
  };

  useEffect(() => {
    getPasswords();
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      theme: darkMode ? "dark" : "light",
      transition: Bounce,
    });
  };

  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      ref.current.src = "icons/eyecross.png";
    } else {
      passwordRef.current.type = "password";
      ref.current.src = "icons/eye.png";
    }
  };

  const savePassword = async () => {
    if (!form.site || !form.username || !form.password) {
      toast.error("Fill all fields!");
      return;
    }

    await fetch("http://localhost:3000/passwords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    getPasswords();

    setform({
      site: "",
      username: "",
      password: "",
    });

    toast.success("Password Saved!");
  };

  const deletePassword = async (id) => {
    if (window.confirm("Do you really want to delete?")) {
      await fetch(`http://localhost:3000/passwords/${id}`, {
        method: "DELETE",
      });

      getPasswords();
      toast.error("Password Deleted!");
    }
  };

  const editPassword = (id) => {
    const item = passwordArray.find((i) => i._id === id);
    setform(item);
    setpasswordArray(passwordArray.filter((i) => i._id !== id));
    toast.info("Edit and save again");
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />

      <div className={`mycontainer max-w-4xl mx-auto px-4 ${darkMode ? "text-white" : "text-black"}`}>
        
        <h1 className="text-4xl font-bold text-center mb-4 mt-6">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </h1>

        <p className="text-center mb-6">Your Own Password Manager</p>

        <div className="flex flex-col p-4 items-center justify-center">
          
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className={`rounded-full border border-green-700 w-full p-2 ${darkMode ? "bg-white text-black" : "text-black"}`}
            type="text"
            name="site"
          />

          <div className="flex flex-col md:flex-row w-full gap-4 mt-4">
            
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className={`rounded-full border border-green-700 w-full p-2 ${darkMode ? "bg-white text-black" : "text-black"}`}
              type="text"
              name="username"
            />

            <div className="relative w-full">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className={`rounded-full border border-green-700 w-full p-2 ${darkMode ? "bg-white text-black" : "text-black"}`}
                type="password"
                name="password"
              />

              <span
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={showPassword}
              >
                <img ref={ref} src="icons/eye.png" width={30} />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="mt-6 flex justify-center items-center gap-2 bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700"
          >
            <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
            Save Password
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>

          {passwordArray.length === 0 ? (
            <p className="text-center">No passwords saved yet.</p>
          ) : (
            <table className="table-auto w-full border border-green-700">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th>Site</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="bg-green-100">
                {passwordArray.map((item) => (
                  <tr key={item._id}>
                    
                    <td className="py-2 border border-white">
                      <div className="flex items-center justify-center gap-2">
                        <a href={item.site} target="_blank">{item.site}</a>
                        <div onClick={() => copyText(item.site)} className="cursor-pointer">
                          <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" style={{ width: "25px" }}></lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span>{item.username}</span>
                        <div onClick={() => copyText(item.username)} className="cursor-pointer">
                          <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" style={{ width: "25px" }}></lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="py-2 border border-white text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span>{item.password}</span>
                        <div onClick={() => copyText(item.password)} className="cursor-pointer">
                          <lord-icon src="https://cdn.lordicon.com/iykgtsbt.json" trigger="hover" style={{ width: "25px" }}></lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="py-2 border border-white text-center">
                      <span onClick={() => editPassword(item._id)} className="cursor-pointer mx-1">
                        <lord-icon src="https://cdn.lordicon.com/gwlusjdu.json" trigger="hover" style={{ width: "25px" }}></lord-icon>
                      </span>

                      <span onClick={() => deletePassword(item._id)} className="cursor-pointer mx-1">
                        <lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" style={{ width: "25px" }}></lord-icon>
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;