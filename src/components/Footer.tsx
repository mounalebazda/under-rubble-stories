export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Students 2AS3
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <div className="space-y-2">
              <p>Chahd Lebazda</p>
              <p>Aymen Bourache</p>
            </div>
            <div className="space-y-2">
              <p>Fatma Zahra Mabdoua</p>
              <p>Tadjer lbrahim</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
