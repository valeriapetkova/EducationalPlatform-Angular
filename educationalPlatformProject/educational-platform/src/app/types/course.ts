export interface Course {
    _ownerId: string;
    title: string;
    startDate: string;
    endDate: string;
    category: string;
    description: string;
    _createdOn: number;
    _id: string;
}

export interface CourseChanges {
    title: string;
    startDate: string;
    endDate: string;
    category: string;
    description: string;
}