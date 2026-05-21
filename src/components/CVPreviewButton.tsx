import { useState } from "react";
import { Download, Eye, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const CV_PATH = "/Murad_Amin_Data_Analyst_CV.pdf";
const CV_FILENAME = "Murad_Amin_Data_Analyst_CV.pdf";

interface CVPreviewButtonProps {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
}

const CVPreviewButton = ({ size = "lg", variant = "default" }: CVPreviewButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={size} variant={variant}>
          <Eye className="mr-2 h-4 w-4" />
          Preview CV (PDF)
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 gap-0 flex flex-col">
        <DialogHeader className="px-6 py-4 border-b border-border">
          <DialogTitle>Murad Amin — CV</DialogTitle>
          <DialogDescription>
            Preview the resume below or download a copy.
          </DialogDescription>
          <div className="flex flex-wrap gap-2 pt-3">
            <Button size="sm" asChild>
              <a href={CV_PATH} download={CV_FILENAME}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in new tab
              </a>
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-1 bg-muted/20 overflow-hidden">
          <object
            data={`${CV_PATH}#view=FitH`}
            type="application/pdf"
            className="w-full h-full"
            aria-label="Murad Amin CV preview"
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-6 gap-4">
              <p className="text-sm text-muted-foreground">
                Your browser can't display PDFs inline. Use the buttons above to
                open or download the CV.
              </p>
              <Button asChild>
                <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open CV
                </a>
              </Button>
            </div>
          </object>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVPreviewButton;
