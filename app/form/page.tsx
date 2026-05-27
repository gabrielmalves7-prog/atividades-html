export default function Page() {
  return (
      <main>
        <form action="test.php" method="get">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" />
        </form>
      </main>
  )
}
