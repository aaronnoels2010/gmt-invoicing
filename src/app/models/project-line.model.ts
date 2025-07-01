export class ProjectLine {
  public id: string;
  public startTime: Date = new Date();

  get startTimeString(): string {
    return (
      this.startTime.getHours().toString().padStart(2, '0') +
      ':' +
      this.startTime.getMinutes().toString().padStart(2, '0')
    );
  }
  set startTimeString(value: string) {
    if (!value) return;
    const timeParts = value.split(':');
    if (timeParts.length != 2) return;
    this.startTime = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate(),
      parseInt(timeParts[0]),
      parseInt(timeParts[1])
    );
  }
  public endTime: Date = new Date();
  get endTimeString(): string {
    return (
      this.endTime.getHours().toString().padStart(2, '0') +
      ':' +
      this.endTime.getMinutes().toString().padStart(2, '0')
    );
  }
  set endTimeString(value: string) {
    if (!value) return;
    const timeParts = value.split(':');
    if (timeParts.length != 2) return;
    this.endTime = new Date(
      this.endDate.getFullYear(),
      this.endDate.getMonth(),
      this.endDate.getDate(),
      parseInt(timeParts[0]),
      parseInt(timeParts[1])
    );
  }
  public date: Date = new Date();
  get dateString(): string {
    return (
      this.date.getFullYear().toString().padStart(4, '0') +
      '-' +
      (this.date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      this.date.getDate().toString().padStart(2, '0')
    );
  }
  set dateString(value: string) {
    console.log(value);
    if (!value) return;
    const dateParts = value.split('-');
    if (dateParts.length != 3) return;
    this.date = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
      0,
      0
    );
    this.startTimeString = this.startTimeString;
    this.endDate = this.date;
  }
  public endDate: Date = new Date();
  get endDateString(): string {
    return (
      this.endDate.getFullYear().toString().padStart(4, '0') +
      '-' +
      (this.endDate.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      this.endDate.getDate().toString().padStart(2, '0')
    );
  }
  set endDateString(value: string) {
    console.log(value);
    if (!value) return;
    const dateParts = value.split('-');
    if (dateParts.length != 3) return;
    this.endDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
      0,
      0
    );
    this.endTimeString = this.endTimeString;
  }
  public isHoliday: boolean = false;

  constructor(public projectId: string = '') {
    this.id = crypto.randomUUID();
  }

  copyFromProjectLine(projectLine: ProjectLine) {
    this.startTime = projectLine.startTime;
    this.endTime = projectLine.endTime;
    this.date = projectLine.date;
    this.endDate = projectLine.endDate ?? projectLine.date;
    this.isHoliday = projectLine.isHoliday;
  }

  static fromObject(line: any) {
    const projectLine = new ProjectLine(line.projectId);
    projectLine.id = line.id;
    projectLine.startTime = new Date(line.startTime);
    projectLine.endTime = new Date(line.endTime);
    projectLine.date = new Date(line.date);
    projectLine.endDate = new Date(line.endDate ?? line.date);
    projectLine.isHoliday = line.isHoliday;
    return projectLine;
  }
}
