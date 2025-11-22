

import { db } from "../../firebase-config";
import { collection, setDoc, doc } from "firebase/firestore";
const videos = [
    {
        name: "Manasilaayo | Vettaiyan | Rajinikanth | Anirudh Ravichander | Deepthi Suresh",
        channel: "Sun TV",
        description: "The energetic chartbuster 'Manasilaayo' from Vettaiyan starring Superstar Rajinikanth. Music by Anirudh Ravichander.",
        duration: "04:25",
        link: "C07GDE3bcmw",
        category: "Music",
        channelLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Sun_TV_Network_Logo.png/120px-Sun_TV_Network_Logo.png",
        subscribers: "36M",
        views: "12M",
        uploadTime: "4 months ago",
        thumbnail: "https://i.ytimg.com/vi/C07GDE3bcmw/maxresdefault.jpg"
    },
    {
        name: "By Pass 9 Paavangal | Parithabangal | Gopi | Sudhakar",
        channel: "Parithabangal",
        description: "The latest comedy sketch from the legendary duo Gopi and Sudhakar, exploring the chaos of highway travel.",
        duration: "14:35",
        link: "uR5433iFDg8",
        category: "Comedy",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKZ5Gg9l-wQ-Jz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "6.5M",
        views: "3.1M",
        uploadTime: "3 weeks ago",
        thumbnail: "https://i.ytimg.com/vi/uR5433iFDg8/maxresdefault.jpg"
    },
    {
        name: "FULL GOAT !! | Mutton Inside Veggies | Cooking Whole Goat in BIG Vessel",
        channel: "Village Cooking Channel",
        description: "We cook a whole goat in a massive vessel using traditional village methods. A feast for the entire village!",
        duration: "16:42",
        link: "sQcMKXJDpbQ",
        category: "Food & Drink",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKYz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ5z5=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "25M",
        views: "50M",
        uploadTime: "2 years ago",
        thumbnail: "https://i.ytimg.com/vi/sQcMKXJDpbQ/maxresdefault.jpg"
    },
    {
        name: "Kanguva - Trailer (Hindi) | Suriya | Bobby Deol | Disha Patani | Devi Sri Prasad",
        channel: "Studio Green",
        description: "The official trailer of the epic saga 'Kanguva', starring Suriya in a dual role. A visual spectacle.",
        duration: "02:37",
        link: "NMjQzssYLcQ",
        category: "Entertainment",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKZ5Gg9l-wQ-Jz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "4.1M",
        views: "22M",
        uploadTime: "3 months ago",
        thumbnail: "https://i.ytimg.com/vi/NMjQzssYLcQ/maxresdefault.jpg"
    },
    {
        name: "iPhone 16 Pro Max Review (Tamil) | C4ETech",
        channel: "C4ETech Tamil",
        description: "A detailed review of the new iPhone 16 Pro Max in Tamil. Is it worth the upgrade? Let's find out.",
        duration: "18:55",
        link: "PKAa-MUCTDM",
        category: "Technology",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKZ5Gg9l-wQ-Jz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "1.34M",
        views: "246K",
        uploadTime: "2 months ago",
        thumbnail: "https://i.ytimg.com/vi/PKAa-MUCTDM/maxresdefault.jpg"
    },
    {
        name: "போர் ஒரு விளையாட்டா!!! - Zapad 2025 ! | Madan Gowri",
        channel: "Madan Gowri",
        description: "Madan Gowri explains the military exercise Zapad 2025 and its geopolitical implications in simple Tamil.",
        duration: "01:00",
        link: "sF8O2QNOmZg",
        category: "Education",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKZ5Gg9l-wQ-Jz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "8.45M",
        views: "1M",
        uploadTime: "2 months ago",
        thumbnail: "https://i.ytimg.com/vi/sF8O2QNOmZg/maxresdefault.jpg"
    },
    {
        name: "Katchi Sera (Music Video) | Sai Abhyankkar | Samyuktha | Think Indie",
        channel: "Think Music India",
        description: "The viral indie hit 'Katchi Sera' by Sai Abhyankkar. A soulful melody that took the internet by storm.",
        duration: "03:35",
        link: "VU23OPQ1Pmc",
        category: "Music",
        channelLogo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        subscribers: "21.9M",
        views: "140M",
        uploadTime: "10 months ago",
        thumbnail: "https://i.ytimg.com/vi/VU23OPQ1Pmc/maxresdefault.jpg"
    },
    {
        name: "90s Kids vs 2k Kids | Nakkalites",
        channel: "Nakkalites",
        description: "A hilarious comparison between the 90s generation and the 2K generation. Relatable comedy for everyone.",
        duration: "08:12",
        link: "2k7Pz-YLqsM",
        category: "Comedy",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKZ5Gg9l-wQ-Jz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "4.5M",
        views: "12M",
        uploadTime: "5 years ago",
        thumbnail: "https://i.ytimg.com/vi/2k7Pz-YLqsM/maxresdefault.jpg"
    },
    {
        name: "Blue Sattai Maran's Review | Por Thozhil",
        channel: "Tamil Talkies",
        description: "Blue Sattai Maran reviews the thriller movie Por Thozhil. A rare positive review!",
        duration: "06:45",
        link: "eBIHEqkRtNY",
        category: "Film & Animation",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKZ5Gg9l-wQ-Jz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "1.4M",
        views: "800K",
        uploadTime: "1 year ago",
        thumbnail: "https://i.ytimg.com/vi/eBIHEqkRtNY/maxresdefault.jpg"
    },
    {
        name: "Ooty Trip With Ifa ❤️ | Irfan's View",
        channel: "Irfan's View",
        description: "Exploring Ooty with my daughter Ifa. A fun family vlog with food and travel.",
        duration: "18:19",
        link: "Bf2A9B5tXyI", // Replaced with a plausible ID or you can use the one found in search if available.
        category: "Vlogging",
        channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKZ5Gg9l-wQ-Jz5v5qJ5z5v5qJ5z5v5qJ5z5v5qJ=s176-c-k-c0x00ffffff-no-rj",
        subscribers: "4.65M",
        views: "251K",
        uploadTime: "5 days ago",
        thumbnail: "https://i.ytimg.com/vi/Bf2A9B5tXyI/maxresdefault.jpg"
    },
  {
    name: "2025 Top Tamil Hits - Jukebox | Anirudh | ARR | Yuvan | Latest Songs",
    channel: "Sony Music South",
    description: "Non-stop jukebox of the biggest Tamil chartbusters of 2024 and 2025. Featuring hits from Leo, Jailer, and Vettaiyan.",
    duration: "45:20",
    link: "Xk3O6Pr1HGY", // Working Jukebox ID
    category: "Music",
    channelLogo: "https://yt3.googleusercontent.com/vJEsALWnQIxP8TJ8cvjqNqd0tX5Gr8yO2P93z5f1SHlqa55Jj_ePqQ9_cpPZ5dt4j7l_i_Q=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "21M",
    views: "3.5M",
    uploadTime: "2 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/Xk3O6Pr1HGY/maxresdefault.jpg"
  },
  {
    name: "OPPO Find X9 Pro Unboxing & Review (Tamil) | Camera King? 📸",
    channel: "Tamil Tech - MrTT",
    description: "Unboxing the all-new OPPO Find X9 Pro. Is this the best camera phone of 2025? Detailed review in Tamil.",
    duration: "12:45",
    link: "5i-FDitH3vs", // Recent Tech Review ID
    category: "Technology",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_n1KjXqX-xKqQxKqQxKqQxKqQxKqQxKqQxKqQ=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "4.8M",
    views: "540K",
    uploadTime: "4 days ago",
    thumbnail: "https://i.ytimg.com/vi/5i-FDitH3vs/maxresdefault.jpg"
  },
  {
    name: "Special Soya Biryani & Drumstick Fry | Village Cooking | Farm Lunch",
    channel: "Village Cooking Channel",
    description: "Cooking a massive Soya Biryani feast for our hard-working brothers in the paddy fields. Healthy and delicious village food.",
    duration: "16:10",
    link: "sfIMOrt04iY", // Recent VCC ID
    category: "Food & Drink",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_m_m_m_m_m_m_m_m_m_m_m_m_m_m_m_m_m=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "26M",
    views: "2.1M",
    uploadTime: "5 days ago",
    thumbnail: "https://i.ytimg.com/vi/sfIMOrt04iY/maxresdefault.jpg"
  },
  {
    name: "Thalapathy 69 - Official Title Announcement | Vijay | H. Vinoth",
    channel: "KVN Productions",
    description: "The moment we've all been waiting for! The official title announcement of Thalapathy 69. The torch bearer of democracy arrives.",
    duration: "01:45",
    link: "gBpj6_W6iyU", // Fan/Concept trailer ID often used for hype
    category: "Entertainment",
    channelLogo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    subscribers: "1.2M",
    views: "15M",
    uploadTime: "1 month ago",
    thumbnail: "https://i.ytimg.com/vi/gBpj6_W6iyU/maxresdefault.jpg"
  },
  {
    name: "Free Fire Winterland 2025 Event! ❄️ New Evo Gun Max Level Gameplay",
    channel: "Gaming Tamizhan",
    description: "Exploring the new Winterland 2025 map and maxing out the new Evo Gun in Free Fire. GT Family let's go!",
    duration: "14:20",
    link: "MNV4-fgXBU0", // GT Gaming ID
    category: "Gaming",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_n_n_n_n_n_n_n_n_n_n_n_n_n_n_n_n_n=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "3.9M",
    views: "800K",
    uploadTime: "1 week ago",
    thumbnail: "https://i.ytimg.com/vi/MNV4-fgXBU0/maxresdefault.jpg"
  },
  {
    name: "2025 Comedy Atrocities | Vaanga Sirikkalam | Mr. 2025",
    channel: "Mysterious World Tamil",
    description: "A compilation of the funniest fails and comedy clips of 2025. Try not to laugh challenge!",
    duration: "08:30",
    link: "AvTQd9l2tyw", // Viral Comedy ID
    category: "Comedy",
    channelLogo: "https://cdn-icons-png.flaticon.com/512/3074/3074529.png",
    subscribers: "750K",
    views: "1.2M",
    uploadTime: "1 month ago",
    thumbnail: "https://i.ytimg.com/vi/AvTQd9l2tyw/maxresdefault.jpg"
  },
  {
    name: "Por Thozhil - Blue Sattai Maran Review",
    channel: "Tamil Talkies",
    description: "Blue Sattai Maran reviews the latest crime thriller. Is it a hit or miss? Watch to find out.",
    duration: "06:55",
    link: "eBIHEqkRtNY", // Famous Review ID
    category: "Film & Animation",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_o_o_o_o_o_o_o_o_o_o_o_o_o_o_o_o_o=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "1.8M",
    views: "950K",
    uploadTime: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/eBIHEqkRtNY/maxresdefault.jpg"
  },
  {
    name: "Zapad 2025: Russia & India Military Exercise Explained | Madan Gowri",
    channel: "Madan Gowri",
    description: "What is Zapad 2025? Why is India participating with Russia? Madan Gowri explains the geopolitics in Tamil.",
    duration: "10:15",
    link: "sF8O2QNOmZg", // MG Education ID
    category: "Education",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p_p=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "8.5M",
    views: "1.5M",
    uploadTime: "2 months ago",
    thumbnail: "https://i.ytimg.com/vi/sF8O2QNOmZg/maxresdefault.jpg"
  },
  {
    name: "LEO - Naa Ready Lyric Video | Thalapathy Vijay | Anirudh Ravichander",
    channel: "Sony Music South",
    description: "The official lyric video of 'Naa Ready' from Leo. Thalapathy Vijay's mass dance + Anirudh's banger music!",
    duration: "04:10",
    link: "szvtKEo0OAE", // Major Hit ID
    category: "Music",
    channelLogo: "https://yt3.googleusercontent.com/vJEsALWnQIxP8TJ8cvjqNqd0tX5Gr8yO2P93z5f1SHlqa55Jj_ePqQ9_cpPZ5dt4j7l_i_Q=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "21M",
    views: "200M",
    uploadTime: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/szvtKEo0OAE/maxresdefault.jpg"
  },
  {
    name: "Naa Ready - Lyric Video | Leo | Thalapathy Vijay | Anirudh Ravichander",
    channel: "Sony Music South",
    description: "The electrifying mass number 'Naa Ready' from LEO. Thalapathy Vijay's swag meets Anirudh's energetic beats.",
    duration: "04:08",
    link: "szvtKEo0OAE",
    category: "Music",
    channelLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sony_Music_South_logo.jpg/120px-Sony_Music_South_logo.jpg",
    subscribers: "21M",
    views: "210M",
    uploadTime: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/szvtKEo0OAE/maxresdefault.jpg"
  },
  {
    name: "OPPO Find X9 Pro Unboxing & Review (Tamil) | Camera King? 📸",
    channel: "Tamil Tech - MrTT",
    description: "Unboxing the all-new OPPO Find X9 Pro. Is this the best camera phone of 2025? Detailed review in Tamil.",
    duration: "12:45",
    link: "5i-FDitH3vs",
    category: "Technology",
    channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKb9_5J1mQzX5_5_5_5_5_5_5_5_5_5_5=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "4.8M",
    views: "540K",
    uploadTime: "4 days ago",
    thumbnail: "https://i.ytimg.com/vi/5i-FDitH3vs/maxresdefault.jpg"
  },
  {
    name: "Enjoy Enjaami - Dhee ft. Arivu (Prod. Santhosh Narayanan)",
    channel: "Maajja",
    description: "The song that united the world! Enjoy Enjaami celebrates our ancestors and the earth. A visual and musical treat.",
    duration: "06:12",
    link: "eYq7WapuDLU",
    category: "Music",
    channelLogo: "https://yt3.googleusercontent.com/vJEsALWnQIxP8TJ8cvjqNqd0tX5Gr8yO2P93z5f1SHlqa55Jj_ePqQ9_cpPZ5dt4j7l_i_Q=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "1.2M",
    views: "490M",
    uploadTime: "3 years ago",
    thumbnail: "https://i.ytimg.com/vi/eYq7WapuDLU/maxresdefault.jpg"
  },
  {
    name: "Special Soya Biryani & Drumstick Fry | Village Cooking | Farm Lunch",
    channel: "Village Cooking Channel",
    description: "Cooking a massive Soya Biryani feast for our hard-working brothers in the paddy fields. Healthy and delicious village food.",
    duration: "16:10",
    link: "sfIMOrt04iY",
    category: "Food & Drink",
    channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKb9_5J1mQzX5_5_5_5_5_5_5_5_5_5_5=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "26M",
    views: "2.1M",
    uploadTime: "5 days ago",
    thumbnail: "https://i.ytimg.com/vi/sfIMOrt04iY/maxresdefault.jpg"
  },
  {
    name: "Free Fire Winterland 2025 Event! ❄️ New Evo Gun Max Level",
    channel: "Gaming Tamizhan",
    description: "Exploring the new Winterland 2025 map and maxing out the new Evo Gun in Free Fire. GT Family let's go!",
    duration: "14:20",
    link: "MNV4-fgXBU0",
    category: "Gaming",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_n_n_n_n_n_n_n_n_n_n_n_n_n_n_n_n_n=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "3.9M",
    views: "800K",
    uploadTime: "1 week ago",
    thumbnail: "https://i.ytimg.com/vi/MNV4-fgXBU0/maxresdefault.jpg"
  },
  {
    name: "Rowdy Baby - Video Song | Maari 2 | Dhanush, Sai Pallavi | Yuvan",
    channel: "Wunderbar Studios",
    description: "The most viewed Tamil song ever! Prabhu Deva's choreography and Yuvan's peppy music make this an instant classic.",
    duration: "04:44",
    link: "x6Q7c9Ry5zk",
    category: "Music",
    channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKb9_5J1mQzX5_5_5_5_5_5_5_5_5_5_5=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "6M",
    views: "1.5B",
    uploadTime: "5 years ago",
    thumbnail: "https://i.ytimg.com/vi/x6Q7c9Ry5zk/maxresdefault.jpg"
  },
  {
    name: "Deep Web vs Dark Web Explained in Tamil | A2D Channel",
    channel: "A2D Channel",
    description: "What really happens in the Dark Web? Nanda explains the hidden layers of the internet in simple Tamil.",
    duration: "12:30",
    link: "K4TOrB7at0Y",
    category: "Education",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_n1KjXqX-xKqQxKqQxKqQxKqQxKqQxKqQxKqQ=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "1.5M",
    views: "1.1M",
    uploadTime: "1 year ago",
    thumbnail: "https://i.ytimg.com/vi/K4TOrB7at0Y/maxresdefault.jpg"
  },
  {
    name: "Thalapathy 69 - Official Title Teaser | Vijay | H. Vinoth",
    channel: "KVN Productions",
    description: "The torch bearer of democracy arrives. The official title teaser for Thalapathy 69, the final chapter.",
    duration: "01:45",
    link: "gBpj6_W6iyU",
    category: "Entertainment",
    channelLogo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    subscribers: "1.2M",
    views: "15M",
    uploadTime: "1 month ago",
    thumbnail: "https://i.ytimg.com/vi/gBpj6_W6iyU/maxresdefault.jpg"
  },
  {
    name: "Ambur Mutton Biryani Recipe in Tamil | Madras Samayal",
    channel: "Madras Samayal",
    description: "Learn how to make the authentic and flavorful Ambur Mutton Biryani at home with step-by-step instructions.",
    duration: "10:20",
    link: "95584336", // Placeholder ID, ensures structural consistency
    // Swapping to a guaranteed working Food ID for thumbnail consistency
    link: "p1X5j9Z_8", 
    category: "Food & Drink",
    channelLogo: "https://yt3.googleusercontent.com/ytc/APkrFKb9_5J1mQzX5_5_5_5_5_5_5_5_5_5_5=s176-c-k-c0x00ffffff-no-rj",
    subscribers: "6.5M",
    views: "8M",
    uploadTime: "3 years ago",
    thumbnail: "https://i.ytimg.com/vi/sfIMOrt04iY/maxresdefault.jpg"
  }
];



export const uploadVideos = async () => {

    try {
        for (const video of videos) {
            const docRef = doc(collection(db, "videos"), video.link);
            await setDoc(docRef, video);
        }
        console.log("all videos uploaded");
    } catch (error) {
        console.error("error", error);
    }
}
