// Define and export a functional React component called Footer
export default function Footer() {
  return (
    // The <footer> tag defines the footer section of the website
    <footer className="text-center py-6 text-gray-500 text-sm">
      {/* Display the current year dynamically using JavaScript Date */}
      {/* Center the text, add vertical padding, make the text gray and small */}
      <p>© {new Date().getFullYear()} Miguel Rodriguez. Se Habla Español.</p>
    </footer>
  );
}