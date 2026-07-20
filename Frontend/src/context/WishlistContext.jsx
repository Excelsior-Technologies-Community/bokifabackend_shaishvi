import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setwishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  //   add to wishlist

  const AddToWishlist = (product) => {
    const ExistItem = wishlist.find((item) => item.id === product.id);
    if (!ExistItem) {
      setwishlist((prev) => [...prev, product]);
    }
  };
  //   remove from wishlist
  const RemovefromWish = (id) => {
    setwishlist((prev) => prev.filter((item) => item.id !== id));
  };

  //   toggle wishlist
  const Togglewishlist = (product) => {
    const ExistItem = wishlist.find((item) => item.id === product.id);
    if (ExistItem) {
      RemovefromWish(product.id);
    } else {
      AddToWishlist(product);
    }
  };
  //   in wishlist
  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setwishlist,
        AddToWishlist,
        RemovefromWish,
        Togglewishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};
