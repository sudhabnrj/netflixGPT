import {GPT_KEY} from './constants';
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: GPT_KEY,
    dangerouslyAllowBrowser: true
  });


export default openai;
