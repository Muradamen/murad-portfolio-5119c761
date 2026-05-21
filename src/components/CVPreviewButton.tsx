import { useState, useEffect, useRef, useCallback } from "react";
import { Download, Eye, ExternalLink, Loader2, AlertCircle } from "lucide-react";
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
const LOAD_TIMEOUT_MS = 8000;

interface CVPreviewButtonProps {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
}

const CVPreviewButton = ({ size = "lg", variant = "default" }: CVPreviewButtonProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLoad = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setLoading(false);
    setError(false);
  }, []);

  const handleError = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setLoading(false);
    setError(true);
  }, []);

  const startLoading = useCallback(() => {
    setLoading(true);
    setError(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, LOAD_TIMEOUT_MS);
  }, []);

  useEffect(() => {
    if (open) {
      startLoading();
    } else {
      // Reset states when modal closes
      setLoading(true);
      setError(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open, startLoading]);

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
        <div className="flex-1 bg-muted/20 overflow-hidden relative">
          {loading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Loading PDF preview...</p>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm gap-4 p-6 text-center">
              <AlertCircle className="h-10 w-10 text-destructive" />
              <div className="space-y-1">
                <p className="text-base font-medium text-foreground">
                  Couldn&apos;t load the PDF preview
                </p>
                <p className="text-sm text-muted-foreground max-w-sm">
                  The file may be unavailable or your browser may not support inline PDF viewing.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
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
            </div>
          )}
          <object
            data={`${CV_PATH}#view=FitH`}
            type="application/pdf"
            className="w-full h-full"
            aria-label="Murad Amin CV preview"
            onLoad={handleLoad}
            onError={handleError}
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-6 gap-4">
              <p className="text-sm text-muted-foreground">
                Your browser can&apos;t display PDFs inline. Use the buttons above to
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
