import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const AZURE_SUBSCRIPTION_KEY = process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY;
const AZURE_REGION = "centralus"; // e.g., 'westus'
const AZURE_ENDPOINT = `https://api.cognitive.microsofttranslator.com`;

if (!AZURE_SUBSCRIPTION_KEY) {
	throw new Error('Set REACT_APP_AZURE_SUBSCRIPTION_KEY for local translation.');
}

const translateText = async (text, targetLanguage) => {
	try {
		const response = await axios({
			baseURL: AZURE_ENDPOINT,
			url: "/translate",
			method: "post",
			headers: {
				"Ocp-Apim-Subscription-Key": AZURE_SUBSCRIPTION_KEY,
				"Ocp-Apim-Subscription-Region": AZURE_REGION,
				"Content-type": "application/json",
				"X-ClientTraceId": uuidv4().toString(),
			},
			params: {
				"api-version": "3.0",
				from: "es", // Assuming the source language is English
				to: "en",
			},
			data: [
				{
					text: text,
				},
			],
			responseType: "json",
		});

		return response.data[0].translations[0].text;
	} catch (error) {
		console.error("Translation failed:", error.message);
		throw error;
	}
};

export default translateText;
