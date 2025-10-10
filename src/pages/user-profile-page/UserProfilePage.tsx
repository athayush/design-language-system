import { Icon } from "@/general/icon/icon/Icon";
import { Button } from "@/components/ui/button";
import { UserMedicalProfileCard, type MedicalProfile } from "@/general/molecules/user-medical-profile-card/UserMedicalProfileCard";
import { UserPreviewProfileCard } from "@/general/molecules/user-preview-profile-card/UserPreviewProfileCard";
import { ProfileLayout } from "@/general/templates/profile-layout.tsx/ProfileLayout";
import { Pencil } from "lucide-react";


const user = {
    name: "Ankush Kumar",
    username: "ankush19",
    email: "ankush@g.com"
}

const defaultProfile: MedicalProfile = {
  name: "Jane Doe",
  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
  username: "janedoe",
  email: "jane.doe@example.com",
  gender: "Female",
  height: "165 cm",
  weight: "60 kg",
  age: "30",
  bloodType: "A+",
  healthScore: 85,
  healthRemark: "Good overall health, maintain routine check-ups.",
  medicalSynopsis:
    "Patient exhibits no critical health concerns. Regular exercise and balanced diet are advised. No recent hospitalizations or major illnesses reported in the last year. Annual physical examination is recommended.",
  knownDiagnostics: "None",
  allergies: "Pollen, Penicillin",
};

function UserProfilePage() {
  return (
    <ProfileLayout>
      <div className="bg-surface-container text-on-surface pt-2">
        <UserPreviewProfileCard name={user.name} username={user.username} email={user.email} healthScore={72}>
          <Button variant="ghost" className="absolute top-0 right-0 m-3 p-0">
            <Icon className={ "bg-tertiary/15 rounded-bl-xs"}><Pencil size={16} /></Icon>
          </Button>
        </UserPreviewProfileCard>
        <UserMedicalProfileCard profile={defaultProfile} />
      </div>
    </ProfileLayout>
  );
}

export {UserProfilePage}