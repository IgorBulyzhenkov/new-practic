export default function Main({ toggle }) {
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button type="button" onClick={toggle}>
        Показать alert
      </button>
    </>
  );
}
