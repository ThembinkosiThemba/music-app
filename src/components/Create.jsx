import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormField, FormFileField } from "./FormField";
import Loader from "./Loader";
import CustomButton from "./CustomButton";

// import { useUser } from "@clerk/clerk-react";

const Create = () => {
  // const { isSignedIn, user, isLoaded } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    // user_id: user.id,
    // creator: user.fullName,
    user_id: "",
    creator: "",
    catergory: "",
    title: "",
    // description: "",
    // goal: "",
    // endAt: "",
    // coverImage: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data:", form);

    try {
      setIsLoading(true);
      await createCampaign({ ...form });
      setIsLoading(false);
      navigate("/campaigns");
    } catch (error) {
      setIsLoading(false);

      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4"
    >
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Submit A Song
        </h1>
      </div>

      <form className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Title *"
            placeholder="Write a title for your song"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        {/* <FormField
          labelName="*"
          placeholder="Having a detailed description will increase your chances of success"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        /> */}
        {/* 
        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img
            src={money}
            alt="money"
            className="w-[40px] h-[40px] object-contain"
          />
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
            You will get 100% of the raised amount
          </h4>
        </div> */}

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Creator *"
            placeholder=""
            inputType="text"
            value={form.creator}
            handleChange={(e) => handleFormFieldChange("creator", e)}
          />
          <FormField
            labelName="Catergory"
            placeholder="Enter catergory"
            inputType="text"
            value={form.catergory}
            handleChange={(e) => handleFormFieldChange("catergory", e)}
          />
          {/* <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.endAt}
            handleChange={(e) => handleFormFieldChange("endAt", e)}
          /> */}
        </div>

        <FormFileField
          labelName="Song Image *"
          placeholder="Upload your song image"
          value={form.coverImage}
          onDone={({ base64 }) =>
            setForm({ ...form, coverImage: base64.split(",").pop() })
          }
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton btnType="submit" title="Submit" styles="bg-[#1dc071]" />
        </div>
      </form>
    </div>
  );
};

export default Create;
