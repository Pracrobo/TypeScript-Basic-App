/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}
//* 인터페이스는 무조건 public

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // 추가적으로 한다면 인터페이스가 아닌 따로 정의해야 한다.
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  move(): void {
    console.log(`${this.moveSpeed} 속도롤 이동`);
  }
}
//Class 'Character' incorrectly implements interface 'CharacterInterface'.
//   Type 'Character' is missing the following properties from type 'CharacterInterface': name, moveSpeed, move
