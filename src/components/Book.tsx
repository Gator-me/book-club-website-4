import type {BookProps} from "../data/books.ts";

export default function Book(props: BookProps) {
  return (
      <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
  )
}