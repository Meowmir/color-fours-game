export type Position = [number, number];
export type PositionObserver = ((position: Position) => void) | null;

export class GameTest {
  public chipPosition: Position = [1, 1];
  private observers: PositionObserver[] = [];

  public observe(o: PositionObserver): () => void {
    this.observers.push(o);
    this.emitChange();

    return (): void => {
      this.observers = this.observers.filter((t) => t !== o);
    };
  }
  public emitChange() {
    const pos = this.chipPosition;
    this.observers.forEach((o) => o && o(pos));
  }

  public moveChip(toX: number, toY: number) {
    this.chipPosition = [toX, toY];
    this.emitChange();
  }

  public canMoveChip(): boolean {
    // if empty, can move,

    return false;
  }
}
