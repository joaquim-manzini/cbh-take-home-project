# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

** I think it's more readable because it eliminates conditionals, use a function to break long calls, and resolves deterministic problems as soon as possible;

1) We can start with a sanity check that gives always the same output 

        if (!event) {
            return TRIVIAL_PARTITION_KEY;
        }

2) A javascript function shortenize the long crypto call chain.

        const reusableCryptoCode = (data) => {
            return crypto.createHash("sha3-512").update(data).digest("hex")
        }

3) Variable "candidate" will always be initialized after 

        candidate = event.partitionKey || reusableCryptoCode(JSON.stringify(event));

so we don't have to test it!

4) The last two "ifs" are necessary at my point-of-view at this time;


