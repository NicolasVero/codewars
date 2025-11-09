# KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.

# You are the boss of Joe.

# Joe is submitting words to you to publish to a blog. He likes to complicate things.

# Define a function that determines if Joe's work is simple or complex.

# Input will be non emtpy strings with no punctuation.

# It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

# Otherwise it is complex.

# If complex:

# return "Keep It Simple Stupid"
# or if it was kept simple:

# return "Good work Joe!"
# Note: Random test are random and nonsensical. Here is a silly example of a random test:

# "jump always mostly is touchy dancing choice is pineapples mostly"


def is_kiss(words):
    word_list = words.split()
    limit = len(word_list)
    
    for w in word_list:
        if len(w) > limit:
            return "Keep It Simple Stupid"
            
    return "Good work Joe!"
