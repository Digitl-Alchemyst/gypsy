import openai from "./chatGpt";

// Chat ID is unused, but could be used to train the model to a specific user by reviewing the chat history.
const query = async (prompt: string, chatId: string, model: string) => {
    const response = await openai.createCompletion({
        model: model,
        // engine: model,
        prompt: prompt,
        max_tokens: 550,
        temperature: 0.9, // Creativity factor 1 creative 0 logical
        top_p: 1,
        presence_penalty: 0.6,
        frequency_penalty: 0.6,
        // bestOf: 1,
        // n: 1,
        stream: true,
        // stop: ["\n", " Human:", " AI:"],
        // logprobs: null,
        // echo: false,
        // user: chatId,
    })
    .then(res => res.data.choices[0].text)
    .catch(
        (err) => 
        `GPT cant answer right now! (Error: ${err.message})`
    );

    return response;

};

export default query;