
import { motion } from "framer-motion";
const LogoHeading = ({ heading }) => {
  return (

    <>
      <div className="w-full justify-center">
        <div className="flex-row  justify-center text-center">

          <div className="inline-block text-center ">
            <h2 className="text-3xl font-bold text-indigo-500 capitalize"> {heading}</h2>


            <br />

          </div>

          <center>

            <motion.img
              src=" https://i.ibb.co/N1sqCFY/Break.png"

              width={600}
              height={600}
              className="justify-center"
              animate={{
                y: ["0%", "0%", "0%"],
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
            />
          </center>
        </div>

      </div>

    </>


  )
}

export default LogoHeading;
