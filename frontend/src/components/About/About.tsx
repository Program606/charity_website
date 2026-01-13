export function About() {
  return (
    <>
      <section className="w-full mb-10">
        <div className="w-full h-full mx-auto flex flex-col items-center justify-center px-6">
          <h2 className="text-3xl font-bold mb-8 text-center pt-10">About Us</h2>
          <img
            src="https://images.unsplash.com/photo-1660182922635-713da2867c82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Group of University Students"
            className="w-full max-h-128 object-cover mb-6 rounded-lg"
          ></img>
          <p className="text-start max-w-3xl pb-10">
            A university-led literacy club empowers children in the community by
            providing free reading support, tutoring sessions, and access to
            educational resources. Through these efforts, children develop
            reading skills, and develop a lifelong love for books. With improved
            literacy skills, the community grows stronger, more engaged, and
            better equipped for long-term success.
          </p>
        </div>
      </section>
    </>
  );
}
