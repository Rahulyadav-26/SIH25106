import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Upload, 
  Star,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Save
} from "lucide-react";

const StudentProfile = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@university.edu",
    phone: "+91 9876543210",
    university: "IIT Delhi",
    course: "B.Tech Computer Science",
    semester: "6th Semester",
    cgpa: "8.75",
    skills: "Python, Java, React, Machine Learning, Data Analysis",
    projects: "E-commerce Web App, Weather Prediction Model, Chat Application",
    interests: "Full Stack Development, Artificial Intelligence, Data Science",
    location: "Bangalore, Mumbai, Remote",
    github: "https://github.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma"
  });

  const profileStrength = 85;
  
  const skillsExtracted = [
    { name: "Python", level: "Advanced", verified: true },
    { name: "Java", level: "Intermediate", verified: true },
    { name: "React", level: "Intermediate", verified: false },
    { name: "Machine Learning", level: "Beginner", verified: false },
    { name: "Data Analysis", level: "Intermediate", verified: true }
  ];

  const handleSave = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Profile updated!",
      description: "Your profile has been saved successfully.",
    });
    setIsLoading(false);
  };

  const handleResumeUpload = () => {
    toast({
      title: "Resume uploaded!",
      description: "Skills have been automatically extracted and added to your profile.",
    });
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">
              Manage your personal information and preferences
            </p>
          </div>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>

        {/* Profile Strength */}
        <Card className="border-0 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Profile Strength</span>
            </CardTitle>
            <CardDescription>
              Complete your profile to increase your chances of getting matched
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Overall Completion</span>
                <span className="text-sm text-muted-foreground">{profileStrength}%</span>
              </div>
              <Progress value={profileStrength} className="h-3" />
              <div className="grid gap-2 md:grid-cols-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>Basic Info Complete</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-success"></div>
                  <span>Resume Uploaded</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-warning"></div>
                  <span>Add More Projects</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Personal Information */}
          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Personal Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={profileData.phone}
                  onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span>Academic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input
                  id="university"
                  value={profileData.university}
                  onChange={(e) => setProfileData(prev => ({ ...prev, university: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Input
                  id="course"
                  value={profileData.course}
                  onChange={(e) => setProfileData(prev => ({ ...prev, course: e.target.value }))}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="semester">Current Semester</Label>
                  <Input
                    id="semester"
                    value={profileData.semester}
                    onChange={(e) => setProfileData(prev => ({ ...prev, semester: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cgpa">CGPA</Label>
                  <Input
                    id="cgpa"
                    value={profileData.cgpa}
                    onChange={(e) => setProfileData(prev => ({ ...prev, cgpa: e.target.value }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resume Upload */}
        <Card className="border-0 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>Resume & Documents</span>
            </CardTitle>
            <CardDescription>
              Upload your resume for automatic skill extraction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag & drop your resume or click to browse
                  </p>
                  <Button variant="outline" onClick={handleResumeUpload}>
                    Upload Resume
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Supports PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>📄 Current Resume: <span className="font-medium">resume_priya_sharma.pdf</span></p>
                  <p className="text-xs">Uploaded on Jan 15, 2024</p>
                </div>
              </div>
              
              {/* Extracted Skills */}
              <div className="space-y-4">
                <h4 className="font-medium">Extracted Skills</h4>
                <div className="space-y-2">
                  {skillsExtracted.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{skill.name}</span>
                        {skill.verified && (
                          <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Skills are automatically extracted from your resume using AI
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills & Experience */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Skills & Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="skills">Technical Skills</Label>
                <Textarea
                  id="skills"
                  value={profileData.skills}
                  onChange={(e) => setProfileData(prev => ({ ...prev, skills: e.target.value }))}
                  rows={3}
                  placeholder="List your technical skills..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projects">Projects</Label>
                <Textarea
                  id="projects"
                  value={profileData.projects}
                  onChange={(e) => setProfileData(prev => ({ ...prev, projects: e.target.value }))}
                  rows={3}
                  placeholder="Describe your key projects..."
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5" />
                <span>Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="interests">Areas of Interest</Label>
                <Textarea
                  id="interests"
                  value={profileData.interests}
                  onChange={(e) => setProfileData(prev => ({ ...prev, interests: e.target.value }))}
                  rows={3}
                  placeholder="What areas interest you most?"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Preferred Locations</Label>
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Bangalore, Mumbai, Remote"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <Card className="border-0 shadow-medium">
          <CardHeader>
            <CardTitle>Professional Links</CardTitle>
            <CardDescription>
              Add your professional profiles to strengthen your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="github">GitHub Profile</Label>
                <Input
                  id="github"
                  value={profileData.github}
                  onChange={(e) => setProfileData(prev => ({ ...prev, github: e.target.value }))}
                  placeholder="https://github.com/yourusername"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  value={profileData.linkedin}
                  onChange={(e) => setProfileData(prev => ({ ...prev, linkedin: e.target.value }))}
                  placeholder="https://linkedin.com/in/yourusername"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentProfile;