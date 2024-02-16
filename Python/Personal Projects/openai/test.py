import openai
import os

# Set up OpenAI API credentials
openai.api_key = os.environ["OPENAI_API_KEY"] = ""

# Read the contents of the file
with open("D:\\Programming\\Personal Projects\\openai\\test.txt", "r") as f:
    text = f.read()

# Call the OpenAI API to generate a response
response = openai.Completion.create(
    engine="davinci",
    prompt=text,
    max_tokens=1024,
    temperature=0.5,
)

# Print the response
print(response.choices.text)
print(response.choices[0].text)
