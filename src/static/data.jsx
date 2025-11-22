import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";


import { MdOutlineLocalMovies } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineFire } from "react-icons/hi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { GiDress } from "react-icons/gi";
import { HiSignal } from "react-icons/hi2";
import { BsNewspaper } from "react-icons/bs";










export const sidebarItems = {
    top:
        [
            { icon: <AiFillHome size={21}/>, name: "Home" },
            { icon: <SiYoutubeshorts size={21}/>, name: "Shorts" },
            { icon: <MdSubscriptions size={21}/>, name: "Subscriptions" },
        ],
    middle:
    [
        {icon: <MdVideoLibrary size={21}/>, name:"Library"},
        {icon: <FaHistory size={21}/>, name:"History"},
        {icon: <MdOutlineSmartDisplay size={21}/>, name: "Your videos"},
        {icon: <MdOutlineWatchLater size={21}/>, name: "Watch later"}

    ],
    explore: [
    { icon: <HiOutlineFire size={23}/>, name: "Trending" },
    { icon: <IoMusicalNoteOutline size={23} />, name: "Music" },
    { icon: <MdOutlineLocalMovies size={23} />, name: "Movies" },
    { icon: <HiSignal size={23} />, name: "Live" },
    { icon: <SiYoutubegaming size={23} />, name: "Gaming" },
    { icon: <BsNewspaper size={23} />, name: "News" },
    { icon: <CiTrophy size={23} />, name: "Sports" },
    { icon: <AiOutlineBulb size={23} />, name: "Learning" },
    { icon: <GiDress size={23} />, name: "Fasion & beauty" },
  ],
}

export const categories = [
  "All",
  "Music",
  "Comedy",
  "Technology",
  "Gaming",
  "Food & Drink",
  "Education",
  "Entertainment",
  "Film & Animation",
  "Travel & Events",
  "Sports",
  "Health & Fitness",
  "Howto & Style",
  "Vlogging",
  "Media Theories",
  "Physics",
  "Sketch Comedy",
  "History",
  "Calculus",
  "Recently Uploaded",
  "Watched",
  "New to You",
  "Tamil Vlogs",
  "Tamil Cooking",
  "Motivation",
  "Tech Reviews",
  "Automobiles",
  "Political Commentary",
  "Short Films",
  "Travel",
  "Standup Comedy",
  "Finance",
  "Lifestyle",
  "Health & Fitness",
  "Anime",
  "Reaction Videos",
  "Spirituality",
  "Movie Reviews",
  "Sports Highlights"
];
