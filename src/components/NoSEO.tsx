const NoSEO = ({ content }: { content: string[] }) => {
  return (
    <>
      {content.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </>
  )
}
export default NoSEO
