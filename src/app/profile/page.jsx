"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isPending && !user) {
    router.push("/auth/login");
    return null;
  }

  if (isPending) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await authClient.updateUser({
        name: name || user.name,
        image: image || user.image,
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      toast.error("Update failed!");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-[70vh] bg-gray-50 py-16 px-4">
      <div className="max-w-[500px] mx-auto">

        {!isEditing ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <div className="flex flex-col items-center pt-10 pb-4 px-6">
              <img
                src={user.image || "/default-avatar.png"}
                alt={user.name}
                width={100}
                height={100}
                className="rounded-full border-2 border-gray-200 object-cover w-24 h-24"
              />
              <h1 className="text-gray-900  mt-4">{user.name}</h1>
              <p className="text-gray-400  mt-1">{user.email}</p>
            </div>

            <div className="px-6 pb-8 space-y-3 mt-4">
              <div>
                <p className="text-gray-700   mb-1">Name</p>
                <div className="border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-gray-500 ">{user.name}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-700  mb-1">Photo URL</p>
                <div className="border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-gray-500  break-all">{user.image || "No image"}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsEditing(true);
                  setName(user.name);
                  setImage(user.image || "");
                }}
                className="w-full bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 transition mt-2"
              >
                Edit Profile
              </button>
            </div>
          </div>

        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <div className="px-6 py-5 flex items-center gap-4 border-b border-gray-100">
              <button
                onClick={() => setIsEditing(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <ArrowLeft size={16} className="text-gray-600" />
              </button>
              <h2 className=" font-bold text-gray-900">Edit Profile</h2>
            </div>

            <div className="flex justify-center pt-8 pb-4">
              <div className="relative">
                <img
                  src={image || user.image || "/default-avatar.png"}
                  alt={user.name}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-gray-200 object-cover w-24 h-24"
                />
                <div className="absolute bottom-0 right-0 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow">
                  +
                </div>
              </div>
            </div>

            <div className="px-6 pb-8 space-y-4">
              <div>
                <label className="text-gray-700  ">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-500 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-gray-700  ">Photo URL</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-500 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <button
                onClick={handleUpdate}
                disabled={isLoading}
                className="w-full bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 transition  mt-2"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProfilePage;