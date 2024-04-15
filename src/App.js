import "./styles/output.css";

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target); // Get form data
    const data = Object.fromEntries(formData.entries()); // Convert FormData to object

    try {
      const response = await fetch("http://localhost:3001/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
          Accept: "application/json",
        },
        body: JSON.stringify(data), // Convert data object to JSON string
      });

      if (response.ok) {
        alert("Blog post successfully added to database!");
      } else {
        alert("Unable to POST data.");
      }
    } catch (error) {
      alert(`Unable to fetch data: ${error}`);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-200 font-sans">
      <div className="flex h-5/6 w-3/5 flex-col items-center justify-start rounded-lg border border-solid border-white bg-white p-2">
        <h1 className="my-5 text-5xl font-bold">Post Blog to Database</h1>
        <form
          className="flex w-4/5 flex-col justify-start"
          action="http://localhost:3001/posts/"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="my-4">
            <label
              className="mb-2 block text-3xl font-medium text-gray-800"
              htmlFor="postTitle"
            >
              Title
            </label>
            <input
              id="postTitle"
              className="w-full rounded-lg border border-solid border-gray-400 p-2 text-2xl"
              name="postTitle"
              type="text"
            />
          </div>
          <div className="my-4">
            <label
              className="mb-2 block text-3xl font-medium text-gray-800"
              htmlFor="postContent"
            >
              Content
            </label>
            <textarea
              id="postContent"
              className="h-48 w-full rounded-lg border border-solid border-gray-400 p-2"
              name="postContent"
              type="text"
            />
          </div>
          <button
            className="mb-5 h-12 w-24 self-end rounded-xl border border-solid border-blue-600 bg-blue-600 p-2 text-lg text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
