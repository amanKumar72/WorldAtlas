
const Contact = () => {

 const handleForm=(data)=>{
  const formData=Object.fromEntries(data.entries())
  console.log(formData)
 }

  return (
    <div className="flex flex-col gap-5 md:gap-10 md:items-center px-2">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Contact Us</h1>
      <form action={handleForm} className=" flex flex-col gap-1 md:gap-2 md:w-[60%] max-w-[576px] p-4 md:p-10 bg-radial-[at_25%_25%] from-zinc-700 to-zinc-900 to-75% border-1 border-white rounded-2xl ">
        <label htmlFor="name" className=" text-lg md:text-3xl ">Enter Your Name</label>
        <input id="name" type="text" name="name" placeholder="Aman Kumar.."  className="bg-gray-100 border-none text-xl md:text-3xl px-4 py-2 rounded-2xl text-gray-900 "   />
        <label htmlFor="email" className=" text-xl md:text-3xl ">Enter your email</label>
        <input type="email" id="email" name="name" placeholder="abc@example.com"   className="bg-gray-100 border-none text-xl md:text-3xl px-4 py-2 rounded-2xl text-gray-900 "  />
        <label htmlFor="message" className=" text-xl md:text-3xl " >Enter your message </label>
        <textarea name="message" id="message" placeholder="I want to meet you...."   rows={5} className="bg-gray-100 border-none text-xl md:text-3xl px-4 py-2 rounded-2xl text-gray-900 "  ></textarea>
        <button type='submit' className='bg-zinc-700 hover:bg-zinc-600 cursor-pointer text-xl md:text-3xl font-semibold my-2 px-4 py-2 rounded-2xl '>Submit</button>
      </form>
    </div>
  )
}

export default Contact
