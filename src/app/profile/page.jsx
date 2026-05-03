"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ArrowLeft, Pencil, Mail, User } from "lucide-react";

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
    <div className="min-h-[60vh] bg-gradient-to-br from-blue-50 to-white py-6 px-4">
      <div className="max-w-[460px] mx-auto">

        {!isEditing ? (
          <div className="bg-white rounded-3xl  shadow-md border border-gray-100 overflow-hidden">

            <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-24 w-full relative">
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                <img
                  src={user.image || "/default-avatar.png"}
                  alt={user.name}
                  className="rounded-full border-4 border-white object-cover w-24 h-24 shadow-md"
                />
              </div>
            </div>

            <div className="flex flex-col items-center pt-16 pb-6 px-6">
              <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-400 text-sm mt-1">{user.email}</p>

              <div className="w-full mt-6 space-y-3">
                <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Full Name</p>
                    <p className="text-sm font-medium text-gray-700">{user.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail size={14} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-medium text-gray-700">{user.email}</p>
                  </div>
                </div>
              </div>

          
              <button
                onClick={() => {
                  setIsEditing(true);
                  setName(user.name);
                  setImage(user.image || "");
                }}
                className="w-full mt-6 bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 transition font-medium flex items-center justify-center gap-2"
              >
                <Pencil size={15} /> Edit Profile
              </button>
            </div>
          </div>

        ) : (
          <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">

            <div className="px-6 py-5 flex items-center gap-4 bg-blue-500">
              <button
                onClick={() => setIsEditing(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <ArrowLeft size={16} className="text-gray-600" />
              </button>
              <h2 className="font-bold text-white">Edit Profile</h2>
            </div>

            <div className="flex justify-center pt-8 pb-4">
              <div className="relative">
                <img
                  src={image || user.image || "/default-avatar.png"}
                  alt={user.name}
                  className="rounded-full border-4 border-blue-100 object-cover w-24 h-24 shadow"
                />
                <div className="absolute bottom-0 right-0 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white shadow">
                  <Pencil size={12} />
                </div>
              </div>
            </div>

            <div className="px-6 space-y-4">
              <div>
                <label className="text-sm text-gray-600 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-600 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 font-medium">Photo URL</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-600 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <button
                onClick={handleUpdate}
                disabled={isLoading}
                className="w-full bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 transition font-medium mt-2 mb-6"
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