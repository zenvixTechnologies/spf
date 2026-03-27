import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Chandy’s Tall County",
      location: "Kottayam, Kerala",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKKeVapBdz-ehL2bvr8IHqBr-cvx6PHBIVEUJ1rSWRaN1sWE-PIJxOGM9NzgSecYpwu3N-3knnYQcyyMQr_z-D7qrCHXM0DEnOB1FqzRqf9xQYwD7SbqrrRotV8BMt72ppyAXJPMiws8p2CBonio7ddohI1TqZUc2CqaKOxzOuUe9RG6xXD5VadMFW95f0S30_dGcUecV38VX7S5BpRoSYIZCIw4MYcrww1ZSXNdtbGXghwcf9PBfFMxhhtLb_0DIMhRmCpzRp1U3G",
      description:
        "Precision pile foundation for a premium residential high-rise, ensuring structural integrity in varied soil conditions.",
    },
    {
      title: "Brilliant Study Centre",
      location: "Pala, Kerala",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1A_4EcYwfaXQT6fohys6TsiQksElEQ2-OoQF6Tc-hwaMqtZaMZqBNikoL_045elZpM7aF2PwdxTbEcL4N4_uk6dBLuWzigeyvsMxwFtE-8d0IyTSVvNNPPKSsw3Yw_3dk2B3i3NXBExV-v5zyZNjBcbxd2a5BqUIkk3pguSVTnoAdtfr2z2tRWJEnuMz2_keklkYBMFhKn7AashWBFbpzUe6IjqhbkbRogTuYhoLPO1spVEZL3KTMsoiJ_pJxRqLR2O83rRkS3NjN",
      description:
        "Comprehensive foundational work for an expansive educational campus designed for high-density occupancy.",
    },
    {
      title: "Darsana Academy",
      location: "Nagampadam, Kerala",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGVD866UMzASIj0GamzhqcbUGXIiiHumCBIG6bJjXR8X8iOiJuMtqGCI1uBLR-JVsrTSd1_BbkczOQ3RF4wzWu6uomqO9VLkDBWU4qbfm9DoPOMKaRCCnALq6tpuP4fUp8gBQnqAYqNe-JuEQSXbkLkMS_KKNldjtPNJStxkqwoGysGxr2AALDmznSnrKgayYB2eOCzEeJPzk97VbxCvMhW9lxK3-S7dX17A8qPNEPID0FD4LY__6u-Lp9qZtWVazF9BBCFqLtPzHk",
      description:
        "Executed deep piling solutions for a multi-storey academic structure located in a challenging urban environment.",
    },
    {
      title: "Lake Palace Resort",
      location: "Alleppey, Kerala",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhNhYzfzc99utZDihH3Ix4XNQRQJksN69I36w0MyP53RhOSyLNL2wwqfMixFsZXluNfbRrwgzdarmBWPinoAu4bZ155s4Yw-vo5ayPAOr2YRg1cYN6ewz2d4QpD9O0zLLEy57y1nLd3INkCv1zPqlqMgBOA_Ozlgg0WfG7ZIqgy6ywfYZQxwaoJmD-wXlamGXZupYTmPQpMR_UrE1CpxOrucF5bAX3YzmPWdd7KUh90AkAnxvbIdltVU5EQLumdYfyhKL_FT7nZ_E0",
      description:
        "Specialized water-adjacent foundation work requiring advanced sealing and load-bearing techniques for resort infrastructure.",
    },
    {
      title: "AVS Serene City",
      location: "Thiruvalla, Kerala",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6wXYIHhPpOBNcUtcuCHG9-9D-_p2hG7QGw0xf0j4HsLCTJJN-d_HHaymV_4J3_WFpm9Ke4MhmXCXZZSWNzKFEtMkXmUc5eTfgShNkNZ3Y5zXb2Z37NVJ-OVTwwbADqcoixrf3-R55EgC6E42bRZGaBHo7_8aVTAXcpM5ZXY6X6rfzTN2y03uOmXn2cdjBSQ57NFXJoMHSc48g5hiVpY-jT1RKmaIB7k73MvHlV9vga6pAy-GFMrZt8eJoO-WEET09LEHLCqk9Ik6L",
      description:
        "High-volume foundation engineering for a massive residential township project, completed on a rigorous timeline.",
    },
    {
      title: "Arcadia Hotel",
      location: "Idinjillam, Kerala",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8wm6M1RH88mSvH4a3JrdaZUc5Bu2UOOsgzGvxMmga_vMHssL3c9OzcUrKtSAwDwSn2VASyDyz4fKskPSzrxOOBo6BsK6oT04d7krZaXA9J_qyEQdnfe6cMxBAazTTEbRDb3XtW2vEQvw_-nOxazxcQjhiB6D071jAfsfHM8koKDD3qFirLbzRLM8gnZe3Qu7kRXTEhg9iuhlsQHpK0x3cj6LUo3cxSm-8QIVcKqgs-PZjD77R9fd1kxOhhNoEa9rc-zIZ6qPWq2ff",
      description:
        "Industrial-strength piling for a landmark hotel structure, supporting heavy loads with seismic considerations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 md:gap-10">

        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}

      </div>
    </section>
  );
}