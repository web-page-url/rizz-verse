import {
    Heart, Sparkles, Flame, Smile, Zap, Crown, Ghost,
    Briefcase, Feather, MessageSquare, Coffee, Moon,
    Star, Music, Sunset, Wind, Code, Dumbbell,
    Camera, MapPin
} from "lucide-react";

export type RizzVibe =
    | "Romantic"
    | "Funny"
    | "Savage"
    | "Cute"
    | "Bollywood"
    | "Dark Mysterious"
    | "Luxury Gentleman"
    | "Soft Girl Energy"
    | "Shayari Mode"
    | "Late Night Feels"
    | "Gym Crush"
    | "Intellectual Rizz"
    | "Geeky Code"
    | "Gym Fitness"
    | "Coffee Shop"
    | "Retro Vintage"
    | "Travel Adventure";

export interface RizzLine {
    text: string;
    author?: string;
    vibe: RizzVibe;
}

export interface CategoryData {
    slug: string;
    title: string;
    desc: string;
    icon: any;
    vibe: RizzVibe;
    preview: string;
}

export const CATEGORY_DATA: CategoryData[] = [
    {
        slug: "romantic-royalty",
        title: "Romantic Royalty",
        vibe: "Romantic",
        icon: Crown,
        desc: "Classic charm for the pure at heart. These lines are designed to make anyone feel like royalty in your eyes.",
        preview: "My universe feels incomplete without you."
    },
    {
        slug: "funny-but-smooth",
        title: "Funny But Smooth",
        vibe: "Funny",
        icon: Smile,
        desc: "Break the ice with a perfect laugh. Charm them with your wit and keep the conversation flowing effortlessly.",
        preview: "Are you Google? You're all I've been searching for."
    },
    {
        slug: "savage-bold",
        title: "Savage & Bold",
        vibe: "Savage",
        icon: Flame,
        desc: "High risk, high reward. For when you want to make a statement that's impossible to ignore.",
        preview: "If looks could kill, you'd be a weapon."
    },
    {
        slug: "cute-innocent",
        title: "Cute & Innocent",
        vibe: "Cute",
        icon: Heart,
        desc: "Soft words that melt hearts. Perfect for those sweet moments where less is definitely more.",
        preview: "I must be a snowflake because I've fallen for you."
    },
    {
        slug: "desi-bollywood",
        title: "Desi Bollywood",
        vibe: "Bollywood",
        icon: Zap,
        desc: "Channel your inner main character with dramatic lines that feel straight out of a blockbuster movie.",
        preview: "Itni shiddat se maine tumhe paane ki koshish ki hai..."
    },
    {
        slug: "dark-mysterious",
        title: "Dark & Mysterious",
        vibe: "Dark Mysterious",
        icon: Ghost,
        desc: "Deep, intriguing vibes for those late-night conversations that go beyond the surface.",
        preview: "The stars are jealous of the light you hide."
    },
    {
        slug: "luxury-ceo-vibes",
        title: "Luxury CEO Vibes",
        vibe: "Luxury Gentleman",
        icon: Briefcase,
        desc: "Sophisticated charm for the elite. Perfect for making a lasting impression of power and elegance.",
        preview: "Excellence is a habit, you are the definition."
    },
    {
        slug: "shayari-special",
        title: "Shayari Special",
        vibe: "Shayari Mode",
        icon: Feather,
        desc: "Poetic depth that touches the soul. Classic Urdu and Hindi influenced lines for deep connection.",
        preview: "Log kehte hain mohabbat ek bar hoti hai..."
    },
    {
        slug: "insta-dm-openers",
        title: "Insta DM Openers",
        vibe: "Savage",
        icon: MessageSquare,
        desc: "The perfect hooks for social media. Stand out in their notifications from the very first word.",
        preview: "Your profile is a masterpiece, can I be the critic?"
    },
    // NEW CATEGORIES
    {
        slug: "late-night-feels",
        title: "Late Night Feels",
        vibe: "Late Night Feels",
        icon: Moon,
        desc: "For 2 AM conversations that feel like forever. Slow burn energy with just enough vulnerability.",
        preview: "You're the thought I can't seem to fall asleep without."
    },
    {
        slug: "gym-crush",
        title: "Gym Crush",
        vibe: "Gym Crush",
        icon: Flame,
        desc: "When you spot someone worth spotting back. Confident, energetic, and surprisingly smooth.",
        preview: "Is your workout done? Because you've been running through my mind all session."
    },
    {
        slug: "intellectual-rizz",
        title: "Intellectual Rizz",
        vibe: "Intellectual Rizz",
        icon: Star,
        desc: "For those who find intelligence irresistibly attractive. Big brain energy, even bigger charm.",
        preview: "You must be made of dark matter — I can't see you clearly, but I feel your pull everywhere."
    },
    {
        slug: "soft-girl-energy",
        title: "Soft Girl Energy",
        vibe: "Soft Girl Energy",
        icon: Sparkles,
        desc: "Gentle, dreamy, and effortlessly lovely. Lines that feel like a warm hug on a rainy afternoon.",
        preview: "You make ordinary moments feel like something worth remembering."
    },
    {
        slug: "geeky-code-rizz",
        title: "Geeky & Code",
        vibe: "Geeky Code",
        icon: Code,
        desc: "For the tech-savvy charmers. Lines that compile perfectly and never result in a merge conflict.",
        preview: "Are you a keyboard? Because you're just my type."
    },
    {
        slug: "gym-fitness-flex",
        title: "Gym & Fitness",
        vibe: "Gym Fitness",
        icon: Dumbbell,
        desc: "High energy lines for the fitness enthusiasts. No pain, all gain in the game of attraction.",
        preview: "Is it hot in here or is it just your workout glow?"
    },
    {
        slug: "coffee-shop-chill",
        title: "Coffee Shop Chill",
        vibe: "Coffee Shop",
        icon: Coffee,
        desc: "Warm, cozy, and highly caffeinated. Perfect for that first date at the local roastery.",
        preview: "I like my coffee like I like my dates: unexpected and sweet."
    },
    {
        slug: "retro-vintage-soul",
        title: "Retro & Vintage",
        vibe: "Retro Vintage",
        icon: Music,
        desc: "Old school charm from the golden eras. Classic vibes for the timeless romantic.",
        preview: "If we were in the 80s, I'd make you a mixtape."
    },
    {
        slug: "travel-adventure-rizz",
        title: "Travel & Adventure",
        vibe: "Travel Adventure",
        icon: MapPin,
        desc: "For the wanderlust souls. Lines that cross borders and explore the uncharted territory of the heart.",
        preview: "Are you a passport? Because I want to take you everywhere."
    }
];

export const RIZZ_LINES: RizzLine[] = [
    // ── Romantic ──────────────────────────────────────────────────────────────
    { text: "Are you a magician? Because whenever I look at you, everyone else disappears.", vibe: "Romantic" },
    { text: "Do you have a map? I keep getting lost in your eyes.", vibe: "Romantic" },
    { text: "If beauty were time, you'd be an eternity.", vibe: "Romantic" },
    { text: "Are you made of stardust? Because my universe feels incomplete without you.", vibe: "Romantic" },
    { text: "I'd never play hide and seek with you because someone like you is impossible to find.", vibe: "Romantic" },
    { text: "If I had a flower for every time I thought of you, I could walk through my garden forever.", vibe: "Romantic" },
    { text: "You're the reason I believe that some things are worth waiting for.", vibe: "Romantic" },
    { text: "I didn't know what 'home' felt like until I heard your laugh.", vibe: "Romantic" },
    { text: "Every love song I've ever dismissed suddenly makes sense because of you.", vibe: "Romantic" },
    { text: "If the world had more of you in it, it would be a softer place.", vibe: "Romantic" },

    // ── Funny ─────────────────────────────────────────────────────────────────
    { text: "Are you made of copper and tellurium? Because you're Cu-Te.", vibe: "Funny" },
    { text: "Is your name Google? Because you've got everything I've been searching for.", vibe: "Funny" },
    { text: "If you were a vegetable, you'd be a cute-cumber!", vibe: "Funny" },
    { text: "Do you have Wi-Fi? Because I'm feeling a connection.", vibe: "Funny" },
    { text: "Are you a keyboard? Because you're just my type.", vibe: "Funny" },
    { text: "Is your name 'Summer'? Because you're hot and I'm ready for a vacation.", vibe: "Funny" },
    { text: "Do you like science? Because I've got great chemistry with you.", vibe: "Funny" },
    { text: "Are you a loan? Because you've got my interest.", vibe: "Funny" },
    { text: "I'd say you're as beautiful as a Greek goddess, but I don't want to be that guy who compares you to fictional characters.", vibe: "Funny" },
    { text: "Is your name Chapstick? Because you're da balm.", vibe: "Funny" },
    { text: "My doctor says I'm lacking Vitamin U.", vibe: "Funny" },
    { text: "Are you from Tennessee? Because you're the only ten I see.", vibe: "Funny" },

    // ── Savage ────────────────────────────────────────────────────────────────
    { text: "If looks could kill, you'd be a weapon of mass destruction.", vibe: "Savage" },
    { text: "Are you a parking ticket? Because you've got FINE written all over you.", vibe: "Savage" },
    { text: "I was going to wait for you to talk to me, but I'm too impatient for perfection.", vibe: "Savage" },
    { text: "My phone is broken. It doesn't have your number in it.", vibe: "Savage" },
    { text: "I'm not a photographer, but I can definitely picture us together.", vibe: "Savage" },
    { text: "You're so beautiful that I forgot my pick-up line.", vibe: "Savage" },
    { text: "I don't chase, I attract. But for you, I'd make an exception.", vibe: "Savage" },
    { text: "Most people aren't worth the effort. You're the rare exception.", vibe: "Savage" },
    { text: "I've turned down easier options just waiting to meet someone like you.", vibe: "Savage" },
    { text: "They say the best things in life are free. Here I am.", vibe: "Savage" },

    // ── Cute ──────────────────────────────────────────────────────────────────
    { text: "Do you have a Band-Aid? Because I just scraped my knee falling for you.", vibe: "Cute" },
    { text: "I must be a snowflake because I've fallen for you.", vibe: "Cute" },
    { text: "Are you a camera? Every time I look at you, I smile.", vibe: "Cute" },
    { text: "I'm learning about important dates in history. Do you want to be one of them?", vibe: "Cute" },
    { text: "You look like you're cold. Want to use me as a blanket?", vibe: "Cute" },
    { text: "If you were a star, you'd be the one I wish upon every single night.", vibe: "Cute" },
    { text: "You make my heart do that little skip thing I used to read about in books.", vibe: "Cute" },
    { text: "Can I follow you home? My parents always told me to follow my dreams.", vibe: "Cute" },
    { text: "I think my heart skipped a beat when I saw you. Please call an ambulance — or stay close.", vibe: "Cute" },

    // ── Bollywood ─────────────────────────────────────────────────────────────
    { text: "Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki saazish ki hai.", vibe: "Bollywood" },
    { text: "Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain, Senorita.", vibe: "Bollywood" },
    { text: "Ek pal ka jeena, phir toh hai jaana... but with you, I'd stay forever.", vibe: "Bollywood" },
    { text: "Tumhare jaise log humare khwabon mein nahi, seedha dil mein aate hain.", vibe: "Bollywood" },
    { text: "Tum mile, toh lagta hai jaise puri duniya mil gayi.", vibe: "Bollywood" },
    { text: "Agar tum na hote, toh yeh kahani adhuri hoti — aur main bhi.", vibe: "Bollywood" },
    { text: "Main puri duniya ghoom aaya, par sukoon tumhare paas hi mila.", vibe: "Bollywood" },
    { text: "Yeh dil maange more — aur woh 'more' sirf tum ho.", vibe: "Bollywood" },
    { text: "Pyar hua, ikraar hua — tum dekhti raho, yeh dil bekarar hua.", vibe: "Bollywood" },

    // ── Dark Mysterious ───────────────────────────────────────────────────────
    { text: "I don't believe in shadows, but I'd follow yours anywhere.", vibe: "Dark Mysterious" },
    { text: "The stars are jealous of the light you hide behind those eyes.", vibe: "Dark Mysterious" },
    { text: "There's a secret in the way you look at the moon, and I want to be the one to hear it.", vibe: "Dark Mysterious" },
    { text: "Some souls are just meant to be found in the quiet moments between heartbeats.", vibe: "Dark Mysterious" },
    { text: "You speak in silences that I somehow understand completely.", vibe: "Dark Mysterious" },
    { text: "You're the kind of person who changes a story simply by entering the room.", vibe: "Dark Mysterious" },
    { text: "There's chaos in the universe — and then there's the unsettling calm of your presence.", vibe: "Dark Mysterious" },
    { text: "I've walked through storms that didn't scare me half as much as the thought of not knowing you.", vibe: "Dark Mysterious" },

    // ── Luxury Gentleman ──────────────────────────────────────────────────────
    { text: "A vintage wine can't compete with the complexity of your presence.", vibe: "Luxury Gentleman" },
    { text: "Excellence is a habit, but you seem to be the definition of it.", vibe: "Luxury Gentleman" },
    { text: "Investments usually take time, but meeting you was an instant dividend.", vibe: "Luxury Gentleman" },
    { text: "Success is the goal, but you're the ultimate reward.", vibe: "Luxury Gentleman" },
    { text: "I've been to some of the finest places in the world. None of them held my attention like you do.", vibe: "Luxury Gentleman" },
    { text: "Good taste is rare. Great company is rarer. You seem to be both.", vibe: "Luxury Gentleman" },
    { text: "I don't compete. I elevate — and I'd love to elevate this conversation with you.", vibe: "Luxury Gentleman" },
    { text: "My schedule doesn't have room for ordinary — fortunately, you are anything but.", vibe: "Luxury Gentleman" },

    // ── Shayari Mode ──────────────────────────────────────────────────────────
    { text: "Tere muskurane ka andaaz kuch aisa hai, jaise sadiyon ki pyas bujh gayi ho.", vibe: "Shayari Mode" },
    { text: "Log kehte hain mohabbat ek bar hoti hai, par main jab tumhe dekhta hoon, mujhe har bar hoti hai.", vibe: "Shayari Mode" },
    { text: "Khuda ki fursat mein banaya ek haseen khwaab ho tum.", vibe: "Shayari Mode" },
    { text: "Dil ki dhadkan mein tum ho, ya tumhari yaad hi kafi hai.", vibe: "Shayari Mode" },
    { text: "Nazar mili thi ek pal ko, dil sadiyoun ke liye diya.", vibe: "Shayari Mode" },
    { text: "Waqt ke saath sab badal jaata hai, par tumhari yaadon ka rang aur gehra hota jaata hai.", vibe: "Shayari Mode" },
    { text: "Tujhse milne ke baad mehsoos hua, mohabbat sirf ehsaas nahi — ek ghazal hai.", vibe: "Shayari Mode" },
    { text: "Jo dil ki baat lab tak aate aate ruk jaaye, woh mohabbat tumse hai.", vibe: "Shayari Mode" },
    { text: "Aankhon mein jo roshni hai tumhari, woh koi shayar likh nahi paaya abhi tak.", vibe: "Shayari Mode" },

    // ── Soft Girl Energy ──────────────────────────────────────────────────────
    { text: "You make ordinary moments feel like something worth remembering.", vibe: "Soft Girl Energy" },
    { text: "There's something so gentle about the way you exist in a room.", vibe: "Soft Girl Energy" },
    { text: "You're the kind of person that makes people want to be a little kinder.", vibe: "Soft Girl Energy" },
    { text: "I think you were put here to remind people that softness isn't weakness.", vibe: "Soft Girl Energy" },
    { text: "Talking to you feels like the first warm day after a really long winter.", vibe: "Soft Girl Energy" },
    { text: "You have this quiet magic that I don't think you're even fully aware of.", vibe: "Soft Girl Energy" },
    { text: "Being around you is what I imagine it feels like to finally exhale.", vibe: "Soft Girl Energy" },

    // ── Late Night Feels (NEW) ────────────────────────────────────────────────
    { text: "You're the thought I can't seem to fall asleep without.", vibe: "Late Night Feels" },
    { text: "It's 2 AM and somehow every song tonight sounds like it was written about you.", vibe: "Late Night Feels" },
    { text: "I keep replaying the way you laughed today. I think I'm in trouble.", vibe: "Late Night Feels" },
    { text: "Do you ever think about the conversations we haven't had yet?", vibe: "Late Night Feels" },
    { text: "The night feels less empty when I know you're somewhere in it.", vibe: "Late Night Feels" },
    { text: "You're the reason I don't mind being awake at hours I can't explain.", vibe: "Late Night Feels" },
    { text: "There's a version of tonight that ends with us talking until sunrise — I like that version.", vibe: "Late Night Feels" },
    { text: "Late nights hit different when you're the last thought before sleep.", vibe: "Late Night Feels" },

    // ── Gym Crush (NEW) ───────────────────────────────────────────────────────
    { text: "Is your workout done? Because you've been running through my mind all session.", vibe: "Gym Crush" },
    { text: "I usually don't skip rest days, but I'd show up every day if you're here.", vibe: "Gym Crush" },
    { text: "Forget PRs — meeting you was the best thing that happened in this gym.", vibe: "Gym Crush" },
    { text: "I've been working on my form, but I lose focus every time you walk in.", vibe: "Gym Crush" },
    { text: "Do you need a spotter? Because I'd never let you fall.", vibe: "Gym Crush" },
    { text: "They say consistency is key. I'm starting to think you're my motivation.", vibe: "Gym Crush" },
    { text: "You make cardio feel worth it — and that's saying something.", vibe: "Gym Crush" },
    { text: "I came here for gains. I didn't expect to also gain a reason to smile.", vibe: "Gym Crush" },

    // ── Intellectual Rizz (NEW) ───────────────────────────────────────────────
    { text: "You must be made of dark matter — I can't see you clearly, but I feel your pull everywhere.", vibe: "Intellectual Rizz" },
    { text: "I've read a lot of great opening lines. None of them prepared me for you.", vibe: "Intellectual Rizz" },
    { text: "The most interesting conversations I've ever had were in my head — until I met you.", vibe: "Intellectual Rizz" },
    { text: "You're the kind of paradox I'd spend years trying to understand and never want to solve.", vibe: "Intellectual Rizz" },
    { text: "Fermat once said a proof was too long to fit in the margin. My feelings for you have the same problem.", vibe: "Intellectual Rizz" },
    { text: "If intelligence were gravity, you'd be impossible to escape.", vibe: "Intellectual Rizz" },
    { text: "I believe in empirical evidence — and every data point I have suggests you're exceptional.", vibe: "Intellectual Rizz" },
    { text: "You argue beautifully, even when you're wrong. Especially when you're wrong.", vibe: "Intellectual Rizz" },

    // ── Geeky Code ────────────────────────────────────────────────────────────
    { text: "Are you an exception? Because I want to catch you.", vibe: "Geeky Code" },
    { text: "You must be a compiler, because you've successfully turned my scripts into reality.", vibe: "Geeky Code" },
    { text: "Are you HTTP? Because without you, I’m just 404.", vibe: "Geeky Code" },
    { text: "My love for you is like a recursive function—it has no base case.", vibe: "Geeky Code" },
    { text: "Are you GitHub? Because I want to commit to you.", vibe: "Geeky Code" },

    // ── Gym Fitness ───────────────────────────────────────────────────────────
    { text: "Do you have a map? Because I’m getting lost in your gains.", vibe: "Gym Fitness" },
    { text: "Is it hot in here or is it just your workout glow?", vibe: "Gym Fitness" },
    { text: "You must be a high-intensity interval, because you make my heart rate spike.", vibe: "Gym Fitness" },
    { text: "I'm looking for a spotter—for the rest of my life.", vibe: "Gym Fitness" },
    { text: "Are you a protein shake? Because you’re giving me all the energy I need.", vibe: "Gym Fitness" },

    // ── Coffee Shop ───────────────────────────────────────────────────────────
    { text: "I like my coffee like I like my dates: unexpected and sweet.", vibe: "Coffee Shop" },
    { text: "You’re a latte to handle, but I’m up for the challenge.", vibe: "Coffee Shop" },
    { text: "Are you a double espresso? Because you’ve got me wide awake and energized.", vibe: "Coffee Shop" },
    { text: "Our connection is stronger than a dark roast.", vibe: "Coffee Shop" },
    { text: "You’re the foam to my cappuccino—essential and perfect.", vibe: "Coffee Shop" },

    // ── Retro Vintage ─────────────────────────────────────────────────────────
    { text: "If we were in the 80s, I'd make you a mixtape.", vibe: "Retro Vintage" },
    { text: "You're a classic in a world full of trends.", vibe: "Retro Vintage" },
    { text: "Our love is like a vinyl record—it only gets better with every spin.", vibe: "Retro Vintage" },
    { text: "You've got that old-school charm that never goes out of style.", vibe: "Retro Vintage" },
    { text: "If beauty were a silent film, you'd be the star.", vibe: "Retro Vintage" },

    // ── Travel Adventure ──────────────────────────────────────────────────────
    { text: "Are you a passport? Because I want to take you everywhere.", vibe: "Travel Adventure" },
    { text: "I've traveled the world, but the best view I've found is right here.", vibe: "Travel Adventure" },
    { text: "Our chemistry is so strong, it should be a UNESCO World Heritage site.", vibe: "Travel Adventure" },
    { text: "I'm not lost, I'm just exploring the possibility of us.", vibe: "Travel Adventure" },
    { text: "If life is a journey, I'd like you to be my favorite destination.", vibe: "Travel Adventure" },
    { text: "You're the adventure I've been waiting for my whole life.", vibe: "Travel Adventure" },
    { text: "My favorite souvenir from this trip would be your number.", vibe: "Travel Adventure" },
];

export const VIBE_COLORS: Record<RizzVibe, string> = {
    Romantic: "from-rose-500 to-pink-600",
    Funny: "from-yellow-400 to-orange-500",
    Savage: "from-purple-600 to-indigo-700",
    Cute: "from-pink-300 to-rose-400",
    Bollywood: "from-orange-500 to-red-600",
    "Dark Mysterious": "from-zinc-800 to-black",
    "Luxury Gentleman": "from-amber-700 to-yellow-900",
    "Soft Girl Energy": "from-pink-200 to-rose-300",
    "Shayari Mode": "from-emerald-600 to-teal-800",
    "Late Night Feels": "from-indigo-900 to-violet-950",
    "Gym Crush": "from-sky-500 to-cyan-600",
    "Intellectual Rizz": "from-slate-700 to-zinc-900",
    "Geeky Code": "from-cyan-500 to-blue-700",
    "Gym Fitness": "from-red-600 to-orange-700",
    "Coffee Shop": "from-brown-400 to-amber-900",
    "Retro Vintage": "from-indigo-400 to-purple-600",
    "Travel Adventure": "from-emerald-500 to-cyan-600"
};