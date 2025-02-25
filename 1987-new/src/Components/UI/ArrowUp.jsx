export default function ArrowUp({ arrowColor }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 14L12 9L7 14"
        stroke={arrowColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
