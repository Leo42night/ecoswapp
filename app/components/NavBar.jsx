import { useState, useEffect } from "react";
import { UserAuth } from "../context/authContext";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { currentUser, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setLoading(false);
    };
    checkAuthentication();
  }, [currentUser]);

  const auth = true;
  return (
    <nav className="bg-neat-50 shadow-lg container min-w-full py-1 h-14 px-4 md:px-8 flex items-center">
      <div className="flex gap-2 me-auto">
        <Link href="/">
          <img loading="lazy" src={`/icon/ecoswap.svg`} alt="" className="w-4 md:w-6" />
        </Link>
        <div className="text-dark">
          Eco <span className="text-xl font-extrabold">Swap</span>
        </div>
      </div>
      {currentUser && (
        <Link href="/product/" className={` ${pathName==="/product" && 'border-b-4 text-lg'} text-dark text-lg uppercase hover:border-b-4 hover:text-lg font-extrabold border-b-dark mx-auto px-auto`}>
          Product
        </Link>
      )}
      <div className="flex gap-2 md:gap-5 justify-evenly font-bold">
        {loading ? null : !currentUser ? (
          <ul className="flex">
            <li onClick={handleSignIn} className={`px-4 p-2 flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold rounded hover:font-extrabold`}>
              Masuk <img src="/icon/google.png" alt="google" className="w-6 rounded-full" />
            </li>
          </ul>
        ) : (
          <ul className="flex items-center">
            <li className="p-2 text-xs md:text-sm lg:text-xl">Hai! {currentUser.displayName}</li>
            <li className="p-2">
              <Image
                src={currentUser.photoURL ?? "/img/avatar.png"}
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            </li>
            <li onClick={handleSignOut} className="p-2 cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Keluar
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
