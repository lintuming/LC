/*
 * @lc app=leetcode id=355 lang=javascript
 *
 * [355] Design Twitter
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.timeline = [];
  this.followees = new Map();
};

function Tweet(userId, tweetId) {
  this.tweetId = tweetId;
  this.userId = userId;
}
/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  const t = new Tweet(userId, tweetId);
  this.timeline.unshift(t);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const followees = this.followees.has(userId)
    ? [...this.followees.get(userId).values()]
    : [];
  return this.timeline
    .filter(tweet => {
      return tweet.userId === userId || followees.includes(tweet.userId);
    })
    .slice(0, 10)
    .map(({ tweetId }) => tweetId);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (this.followees.has(followerId)) {
    this.followees.get(followerId).add(followeeId);
  } else {
    this.followees.set(followerId, new Set([followeeId]));
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.followees.has(followerId)) {
    this.followees.get(followerId).delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end