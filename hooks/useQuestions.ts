export function useQuestions(type: string) {
    
    if (type === "General Mental Health") {
      return [
        {
          id: "1",
          title: "Is it just a bad mood or more?",
          description:
            "Prolonged bad mood could indicate that something in our life is off or needs attention.",
          icon: "emoji-happy",
        },
        {
          id: "2",
          title: "How to cope with stress?",
          description:
            "Stress is a normal part of life, but when it becomes overwhelming, it can cause mental health problems.",
          icon: "shield",
        },
      ];
    }
  
    if (type === "Quality of life") {
      return [
        {
          id: "1",
          title: "How to improve quality of life?",
          description:
            "Quality of life is subjective and means different things to different people.",
          icon: "shield",
        },
        {
          id: "2",
          title: "How to cope with stress?",
          description:
            "Stress is a normal part of life, but when it becomes overwhelming, it can cause mental health problems.",
          icon: "shield",
        },
      ];
    }
  
    if (type === "Neurodivergence") {
      return [
        {
          id: "1",
          title: "Understanding neurodivergence",
          description:
            "Neurodivergence includes a range of cognitive differences, such as ADHD and autism, and how they shape experiences.",
          icon: "brain",
        },
        {
          id: "2",
          title: "Supporting neurodivergent individuals",
          description:
            "Understanding and accommodating different cognitive needs can improve well-being and foster inclusivity.",
          icon: "handshake",
        },
      ];
    }
  
    if (type === "Relationships") {
      return [
        {
          id: "1",
          title: "Building healthy relationships",
          description:
            "Healthy relationships require trust, respect, and open communication, and are vital to mental well-being.",
          icon: "heart",
        },
        {
          id: "2",
          title: "Navigating relationship challenges",
          description:
            "Every relationship faces challenges. Learning to communicate effectively can strengthen connections.",
          icon: "conversation",
        },
      ];
    }
  
    if (type === "Trauma") {
      return [
        {
          id: "1",
          title: "Understanding trauma",
          description:
            "Trauma is a response to deeply distressing experiences and can have lasting impacts on mental health.",
          icon: "broken-heart",
        },
        {
          id: "2",
          title: "Healing from trauma",
          description:
            "Healing is a personal journey and may involve therapy, support networks, and self-care practices.",
          icon: "flower",
        },
      ];
    }
  
    return [];
  }
  