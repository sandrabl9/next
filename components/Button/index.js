export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            background: #000;
            border: 0;
            color: #fff;
            font-weight: 700;
            padding: 8px 0;
            border-radius: 3px;
            cursor: pointer;
          }
          button > :global(svg) {
            margin-right: 6px;
          }
          button:hover {
            background: #444;
          }
        `}
      </style>
    </>
  );
}
