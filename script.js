const translateBtn = document.getElementById("translateBtn");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const inputLanguage = document.getElementById("inputLanguage");
const outputLanguage = document.getElementById("outputLanguage");
const apiKey = "df5561d42dmsh43e2f7f993c79d1p1246d6jsnb5063bf72a3c";

const translateText = async () => {
    const text = inputText.value;
    const source = inputLanguage.value;
    const target = outputLanguage.value;

    if (!text || !source || !target) {
        return;
    }

    try {
        const response = await fetch(
            "https://google-translate1.p.rapidapi.com/language/translate/v2",
            {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-rapidapi-host": "google-translate1.p.rapidapi.com",
                    "x-rapidapi-key": "df5561d42dmsh43e2f7f993c79d1p1246d6jsnb5063bf72a3c",
                },
                body: new URLSearchParams({
                    q: text,
                    source,
                    target,
                }),
            }
        );

        const data = await response.json();
        outputText.value = data.data.translations[0].translatedText;
    } catch (error) {
        console.error(error);
    }
};

translateBtn.addEventListener("click", translateText);
inputText.addEventListener("input", translateText);
inputLanguage.addEventListener("change", translateText);
outputLanguage.addEventListener("change", translateText);
