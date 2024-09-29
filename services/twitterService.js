
export const fetchTwitterPosts = async (searchTerm, searchType = 'Top') => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/search.php?query=${searchTerm}&search_type=${searchType}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,  // API Key
            'x-rapidapi-host': 'twitter-api45.p.rapidapi.com',  // Twitter API host
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch tweets');
    }

    const data = await response.json();
    return data;
};

export const fetchTwitterUserInfo = async (screenname, restId) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/screenname.php?screenname=${screenname}&rest_id=${restId}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user info');
    }

    const data = await response.json();
    return data;
};

export const fetchTwitterUserTimeline = async (screenname) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/timeline.php?screenname=${screenname}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user timeline');
    }

    const data = await response.json();
    return data.timeline;
};

export const fetchTwitterFollowing = async (screenname) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/following.php?screenname=${screenname}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch following list');
    }

    const data = await response.json();
    return data;
};

export const fetchTwitterFollowers = async (screenname) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/followers.php?screenname=${screenname}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch followers');
    }

    const data = await response.json();
    return data.followers;  // Takipçileri döndür
};

export const fetchTweetInfo = async (tweetId) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/tweet.php?id=${tweetId}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch tweet info');
    }

    const data = await response.json();
    return data;
};

export const fetchTwitterUserMedia = async (screenname) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/usermedia.php?screenname=${screenname}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user media');
    }

    const data = await response.json();
    return data.media;
};

export const fetchTweetRetweets = async (tweetId) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/retweets.php?id=${tweetId}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch tweet retweets');
    }

    const data = await response.json();
    return data.retweets;
};

export const fetchTwitterTrends = async (country) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/trends.php?country=Turkey`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Twitter trends');
    }

    const data = await response.json();
    return data.trends;
};

export const fetchListTimeline = async (listId) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/listtimeline.php?list_id=${listId}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch list timeline');
    }

    const data = await response.json();
    return data.timeline;
};

export const fetchUserReplies = async (screenname) => {
    const config = useRuntimeConfig();  //
    const url = `https://${config.public.rapidApiHost}/replies.php?screenname=${screenname}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user replies');
    }

    const data = await response.json();
    return data.timeline;
};

export const fetchUserInfo = async (screenname) => {
    const config = useRuntimeConfig();
    const url = `https://${config.public.rapidApiHost}/screenname.php?screenname=${screenname}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': config.public.rapidApiKey,
            'x-rapidapi-host': config.public.rapidApiHost,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user info');
    }

    const data = await response.json();
    console.log("API'den gelen tam veri:", data);  // Gelen veriyi kontrol edelim

    // Eğer API'den sadece profile string geliyorsa, data.profile'i dönelim
    if (data.profile) {
        return data;
    } else {
        throw new Error("Expected profile data not found in response.");
    }
};


