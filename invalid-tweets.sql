SELECT tweet_id 
From Tweets
WHERE CHAR_LENGTH(content) > 15;