
import { motion } from "framer-motion";
const LogoHeading = ({ heading }) => {
  return (

    <>
      <div className="w-full justify-center">
        <div className="flex-row  justify-center text-center">

          <div className="inline-block text-center ">
            <h2 className="text-3xl font-bold text-indigo-500 capitalize"> {heading}</h2>

          </div>

          <center>

            <motion.img
              src="https://i.ibb.co/JKngSW4/Mahakaal-Logo2.png"
              width={40}
              height={20}
              className="justify-center"
              animate={{
                y: ["20%", "0%", "20%"],
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
