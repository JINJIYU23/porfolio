import TextType from "./TextType";
export default function Landing() {
  return (
    <>
      <h1>Landing Component</h1>
      <TextType
        text={[
          "Hello, World 👋",
          "Welcome! It's great to have you here!",
          "Happy coding!",
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </>
  );
}
