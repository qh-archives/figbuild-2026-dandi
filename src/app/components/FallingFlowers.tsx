import imgImage43 from "@/assets/e12ce92d4305f84b7652b4854a417ce09954c2e0.png";
import { FallingFlowersGeneric } from "./FallingFlowersGeneric";

interface FallingFlowersProps {
  isExpanding: boolean;
}

export function FallingFlowers({ isExpanding }: FallingFlowersProps) {
  return <FallingFlowersGeneric isExpanding={isExpanding} flowerImage={imgImage43} />;
}
