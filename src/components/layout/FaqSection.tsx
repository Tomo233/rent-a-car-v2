import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import SectionDivider from "../ui/SectionDivider";
import BlueSpan from "../ui/BlueSpan";
import FaqItem from "./FaqItem";

export const questionsAndAnswers = [
  {
    question: "What types of vehicles do you offer?",
    answer:
      "We offer a variety of vehicles including sedans, SUVs, trucks, and vans.",
  },
  {
    question: "Do you have options for long-term rentals?",
    answer:
      "Yes, we offer long-term rental options with flexible terms and competitive rates.",
  },
  {
    question:
      "What are your rental rates and are there any discounts available?",
    answer:
      "Our rental rates vary depending on the type of vehicle and rental duration. We also offer discounts for loyal customers and advance bookings.",
  },
  {
    question: "What is your policy on insurance and damages?",
    answer:
      "We provide insurance coverage for our vehicles, and customers can opt for additional coverage for peace of mind. Any damages incurred during the rental period are subject to assessment and repair charges.",
  },
  {
    question: "Are there any additional fees or charges I should be aware of?",
    answer:
      "In addition to the rental fee, there may be charges for optional extras such as GPS navigation, child seats, or additional drivers. We also have fees for late returns or cleaning if the vehicle is returned excessively dirty.",
  },
] as const;

function FaqSection() {
  return (
    <section className="my-36">
      <SectionDivider>
        Frequently Asked <BlueSpan>Questions</BlueSpan>
      </SectionDivider>

      <div className="flex justify-center pt-10">
        <TableContainer
          component={Paper}
          style={{ width: "900px", maxHeight: "500px" }}
          className="container"
        >
          <Table aria-label="FAQ table">
            <TableBody>
              {questionsAndAnswers.map((qa) => (
                <FaqItem key={Math.random()} row={qa} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}

export default FaqSection;
