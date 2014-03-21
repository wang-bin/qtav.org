function createfigure(YMatrix1, YMatrix2)
%CREATEFIGURE(YMATRIX1,YMATRIX2)
%  YMATRIX1:  matrix of y data
%  YMATRIX2:  matrix of y data

%  Auto-generated by MATLAB on 21-Mar-2014 13:22:06

% Create figure
figure1 = figure;

% Create axes
axes1 = axes('Parent',figure1);
box(axes1,'on');
hold(axes1,'all');

% Create multiple lines using matrix input to plot
plot1 = plot(YMatrix1,'Parent',axes1,'LineWidth',2);
set(plot1(1),'Marker','square','LineStyle',':','Color',[1 0 0],...
    'DisplayName','VLC OpenGL+DXVA');
set(plot1(2),'Marker','o','Color',[0 1 0],'DisplayName','QtAV OpenGL+DXVA');

% Create title
title('CPU usage. NVIDIA GT530M, Big Buck Bunny 1080P H.264');

% Create multiple lines using matrix input to plot
plot2 = plot(YMatrix2,'Parent',axes1,'LineWidth',2);
set(plot2(1),'Marker','^','LineStyle','-.','Color',[1 0 0],...
    'DisplayName','VLC OpenGL+FFmpeg');
set(plot2(2),'Marker','+','LineStyle','--','Color',[0 1 0],...
    'DisplayName','QtAV OpenGL+FFmpeg');

% Create legend
legend1 = legend(axes1,'show');
set(legend1,'FontSize',14,'FontName','Andale Mono');

