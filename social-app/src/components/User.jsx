import Button from "./Button";
import PropTypes from "prop-types";
import { myContext } from "../context/Context";
import { useContext } from "react";
export default function User({ follower, showFollowers }) {
  const { fetchUsers } = useContext(myContext);

  async function deleteUser(id, url) {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to delete user");
    } else {
      fetchUsers();
      console.log("User successfully deleted");
    }
  }

  function removeClickedFollower(id) {
    const confirm = window.confirm("are you sure you want remove user");
    if (!confirm) return;
    showFollowers
      ? deleteUser(Number(id), "http://localhost:5000/followme")
      : deleteUser(id, "http://localhost:5000/following");
    // showFollowers
    //   ? setListFollowers((listFollowers) => listFollowers.filter((follower) => follower.id !== id))
    //   : setListFollowing((listFollowing) => listFollowing.filter((follower) => follower.id !== id));
  }
  return (
    <>
      <li className="m-4 flex items-center justify-between p-3">
        <h2 className="text-lg font-semibold text-white">{follower.username}</h2>
        <Button
          onClick={() => removeClickedFollower(follower.id)}
          className="rounded-lg bg-gray-500 p-2 text-white hover:bg-gray-400"
        >
          {showFollowers ? "Remove" : "Following"}
        </Button>
      </li>
    </>
  );
}

User.propTypes = {
  follower: PropTypes.object,
  showFollowers: PropTypes.bool,
  showFollowing: PropTypes.bool,
};