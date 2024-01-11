import ImageElement from "@components/ImageElement/ImageElement";
import IconCreativeStud from "@assets/images/IconCreativeStud.png";
import Divider from "@components/Divider/Divider";

const SubmitionStatus = () => {
  return (
    <div className=" relative">
      <div className="w-full text-center">
        <span className="md:text-[78px] text-3xl font-league-gothic">
          Inscrição Submetida!
        </span>
      </div>

      <div className="absolute text-sm md:text-lg flex flex-col md:gap-5 md:mt-9 gap-3 mt-5">
        <p>
          Obrigado por nos teres escolhido. Em breve receberás mais informação
          sobre este <b>Creative Workshop</b>.
        </p>
        <p> Vemos-nos em breve!</p>
        <p className="italic">Creative Studio</p>
      </div>

      <ImageElement
        src={IconCreativeStud}
        objectPosition="center"
        className=" w-24 h-24 md:w-44 md:h-44 ml-auto md:mt-6 mt-3"
        alt={"IconCreativeStud"}
      />
      <div className="md:w-[577px] md:mt-6 w-[277px] mt-3">
        <Divider />
      </div>
    </div>
  );
};

export default SubmitionStatus;
