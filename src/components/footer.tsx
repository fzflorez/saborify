export default function Footer() {
  return (
    <div className="bg-yellow-700 text-white p-4 font-semibold text-center">
      <p>
        &copy; {new Date().getFullYear()} Saborify.
      </p>
    </div>
  );
}
